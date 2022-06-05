import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalHeader,
    Row,
    Spinner
} from "reactstrap"
import Timeline from "../../@core/components/timeline"
import Avatar from "../../@core/components/avatar"
import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {
    createOrderSourceFilesListen,
    getAllOrderSourceFilesListen,
    getOrderByIDListen,
    getOrderTimeLineByIDListen,
    updateOrderStateListen
} from "../OrderView/actions"
import CookingLoader from "../../custom-components/CookingLoader"
import moment from "moment"
import Swal from "sweetalert2"
import SourceFileCard from "../../custom-components/orderDetailsView/SourceFileCard"
import {Link, Upload} from "react-feather"
import {useFormik} from "formik"
import {fireAlertError} from "../../utility/customUtils"

const OrderDetailsView = () => {

    const pathname = window.location.pathname
    const id = pathname.split("/order-details/")[1]

    const dispatch = useDispatch()

    // eslint-disable-next-line no-unused-vars
    const {
        singleOrder,
        singleOrderLoader,
        timeLineData,
        timeLineLoader,
        sourceFiles,
        sourceFilesLoader,
        createSourceFileLoader
    } = useSelector(state => state.orderReducer)

    const [show, setShow] = useState(false)

    const handleStatusPointer = (num) => {
        switch (num) {
            case 0:
                return "warning"
            case 1:
                return "info"
            case 2:
                return "success"
            case -1:
                return "danger"
            default:
                return "dark"
        }
    }

    const handleStatusMessage = (num) => {
        switch (num) {
            case 0:
                return "Pending"
            case 1:
                return "On going"
            case 2:
                return "Complete"
            case -1:
                return "Canceled"
            default:
                return "dark"
        }
    }

    const validate = (values) => {
        if (!values.sourceFile) {
            fireAlertError("Oops !", "You must add a link")
            return
        }

        if (!values.description) {
            fireAlertError("Oops !", "You must add a description")
            return
        }

        dispatch(createOrderSourceFilesListen({
            ...values,
            orderID: singleOrder._id
        }))
    }

    // eslint-disable-next-line no-unused-vars
    const formik = useFormik({
        initialValues: {
            sourceFile: "",
            description: ""
        },
        onSubmit: values => {
            validate(values)
        }
    })

    const timelineMsgHandler = (orderLog) => {

        switch (orderLog?.logStatus) {
            case 0:
                return {
                    title: 'Created the project',
                    content: `New project has started by ${singleOrder?.customerID?.name}`,
                    meta: moment(orderLog?.createdAt).format("LL"),
                    color: 'warning',
                    customContent: (
                        <div className='d-flex align-items-center mb-50'>
                            <Avatar
                                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeriYGQjOOecu23m2gqPoc1_Dz5Phrr4uKWwNMnwyQxUYDgCUqOHiwv0Jph1MU5Kzf0g&usqp=CAU"
                                imgHeight={38} imgWidth={38}/>
                            <div className='ms-50'>
                                <h6 className='mb-0'>{singleOrder?.customerID?.name} (Client)</h6>
                                <span>Admin-talent zea</span>
                            </div>
                        </div>
                    )
                }
            case 1:
                return {
                    title: 'Started the project',
                    content: `Project is on going now`,
                    meta: moment(orderLog?.createdAt).format("LL"),
                    color: 'info'
                }
            case 2:
                return {
                    title: 'Completed the project',
                    content: `Hooray ! completed the project`,
                    meta: moment(orderLog?.createdAt).format("LL"),
                    color: 'success'
                }
            case -1:
                return {
                    title: 'Canceled the project',
                    content: `Reson: ${orderLog?.message}`,
                    meta: moment(orderLog?.createdAt).format("LL"),
                    color: 'danger'
                }
            default:
                break
        }
    }

    const cookTimeLineData = () => {

        const timeLineArr = []

        timeLineData.map(e => {
            timeLineArr.push(timelineMsgHandler(e))
        })

        return timeLineArr
    }

    const updateState = (id, state) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You are going to change the order status",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Status will be updated in a moment !!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(updateOrderStateListen({id, state}))
            }
        })
    }

    const directToImageService = () => {
        window.open("https://trainbit.com/files/", "_blank")
    }

    useEffect(() => {
        dispatch(getOrderByIDListen(id))
        dispatch(getOrderTimeLineByIDListen(id))
    }, [])

    //Use this effect to get the source files
    useEffect(() => {
        dispatch(getAllOrderSourceFilesListen(singleOrder._id))
    }, [singleOrder])

    if (!singleOrderLoader) {
        return <div>
            <Card className="p-0">
                <CardHeader className="bg-gradient-primary f-Staatliches">
                    <h1 className="text-light">Required Data</h1>
                </CardHeader>
                <CardBody>
                    {singleOrder?.meta_data?.map((e, index) => {
                        return <div key={index} className="mt-2">
                            <Label className="text-large f-Staatliches">{e.key}</Label>
                            <Input value={e.value} disabled={true} placeholder=""/>
                        </div>
                    })}
                </CardBody>
            </Card>
            <Card>
                <CardHeader className="d-flex justify-content-between">
                    <div>
                        <h1 className="f-Staatliches font-large-1"><span
                            className="text-danger">{singleOrder?.subServiceID?.mainService?.mainTopic}</span> {">"}
                            <span className="text-primary">{singleOrder?.subServiceID?.mainTopic}</span></h1>
                        <p className="text-grey mt-1">Created at:- {moment(singleOrder?.createdAt).format("L")}</p>
                        <p className="text-grey">
                            {singleOrder?.subServiceID?.deliveryTime} days delivery</p>
                    </div>
                    <div className="mr-1">
                        <h1 className="font-bold">$ {singleOrder?.amount}.00 /=</h1>
                    </div>
                </CardHeader>
                <hr/>
                <CardBody>
                    <h1 className="f-courgette">Pricing & Features</h1>
                    <div className="w-25">
                        <ol className="f-courgette mt-2">
                            <li className="text-medium mb-1">
                                <div className="w-100 d-flex justify-content-between text-primary">
                                    <div>
                                        Base price
                                    </div>
                                    <div>
                                        $ {singleOrder?.subServiceID?.price}.00 /=
                                    </div>
                                </div>
                            </li>
                            {
                                Boolean(singleOrder?.subServiceID?.hide) && <li className="text-medium mb-1">
                                    <div className="w-100 d-flex justify-content-between">
                                        <div>
                                            Revisions:- 7
                                        </div>
                                        <div>
                                            $ {singleOrder?.revisions.price}.00 /=
                                        </div>
                                    </div>
                                </li>
                            }
                            {
                                parseInt(singleOrder?.sourceFiles?.price) > 0 && <li className="text-medium mb-1">
                                    <div className="w-100 d-flex justify-content-between">
                                        <div>
                                            Source files included
                                        </div>
                                        <div>
                                            $ {singleOrder?.sourceFiles?.price}.00 /=
                                        </div>
                                    </div>
                                </li>
                            }
                            {
                                parseInt(singleOrder?.expressDelivery?.price) > 0 && <li className="text-medium">
                                    <div className="w-100 d-flex justify-content-between">
                                        <div>
                                            Express delivery - <span
                                            className="text-danger">{singleOrder?.subServiceID?.expressDelivery.count} days</span>
                                        </div>
                                        <div>
                                            $ {singleOrder?.expressDelivery?.price}.00 /=
                                        </div>
                                    </div>
                                </li>
                            }
                        </ol>
                    </div>
                </CardBody>
            </Card>
            <Row className="mt-5">
                <Col sm={12} lg={7}>
                    <div className="mb-2">
                        <h1 className="f-Staatliches">Order Timeline</h1>
                    </div>
                    <Card className="mb-5 p-2 bg-semi-dark d-flex">
                        {
                            !timeLineLoader ? <Timeline data={cookTimeLineData()}/> : <Spinner/>
                        }
                    </Card>
                </Col>
                <Col lg={5}>
                    <div className="d-center h-100">
                        <Card className="d-flex flex-column d-center p-5">
                            <div className="d-flex flex-row align-items-baseline">
                                <div
                                    className={`bg-${handleStatusPointer(singleOrder?.orderStatus)} full-round mr-1 p-0`}
                                    style={{width: "15px", height: "15px"}}/>
                                <h1 className={`text-${handleStatusPointer(singleOrder?.orderStatus)}`}>{handleStatusMessage(singleOrder?.orderStatus)}</h1>
                            </div>
                            <div className="mt-2 d-flex">
                                {
                                    (singleOrder.orderStatus === 1) && <button
                                        onClick={() => updateState(singleOrder._id, singleOrder.orderStatus)}
                                        className={`btn btn-danger mr-2`}>Prev.
                                        STATE
                                    </button>
                                }
                                {
                                    (singleOrder.orderStatus !== 2 && singleOrder.orderStatus !== -1) && <button
                                        onClick={() => updateState(singleOrder._id, singleOrder.orderStatus + 1)}
                                        className={`btn btn-${handleStatusPointer(singleOrder?.orderStatus)}`}>NEXT
                                        STATE
                                    </button>
                                }
                            </div>
                        </Card>
                    </div>
                </Col>
            </Row>
            <Row>
                <div className="d-flex align-items-baseline mb-2">
                    <h1 className="f-Staatliches">Source files</h1>
                    <div>
                        <button
                            onClick={directToImageService}
                            className="btn btn-gradient-primary ml-2"><Link/> To image service
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => setShow(!show)}
                            className="btn btn-gradient-success ml-2"><Upload/> Upload a file
                        </button>
                    </div>
                </div>
                {
                    sourceFilesLoader ? <div className="w-100 d-center flex-column animate__animated animate__bounce mt-2">
                            <Spinner className="text-primary"/>
                            <p className="text-small text-primary f-courgette mt-1">cooking data...</p>
                        </div> : sourceFiles.length > 0 ? <Row className="mt-1 d-flex flex-wrap">
                            {
                                sourceFiles.map((e, index) => {
                                    return <SourceFileCard key={index} data={e}/>
                                })
                            }
                        </Row> : <div className="w-100 d-center mt-2">
                            <h3 className="f-courgette text-danger">No source files shared yet !</h3>
                        </div>
                }
            </Row>
            {/*//////////////////////*/}
            {/*Modal starts form here*/}
            {/*//////////////////////*/}
            <Modal isOpen={show} toggle={() => setShow(!show)}
                   className='modal-dialog-centered modal-lg'>
                <ModalHeader className='bg-primary' toggle={() => setShow(!show)}>
                    <h1 className="text-light f-Staatliches">Upload your file</h1>
                </ModalHeader>
                <ModalBody className='px-sm-5 mx-50 pb-4'>
                    <Form onSubmit={formik.handleSubmit} className="mt-2">
                        <div>
                            <Label htmlFor="sourceFile">
                                <h4 className="f-Staatliches">
                                    Add your file link
                                </h4>
                            </Label>
                            <Input
                                id="sourceFile"
                                name="sourceFile"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.sourceFile}
                                placeHolder="https://www.example.com/123.jpg"/>
                        </div>
                        <div className="mt-3">
                            <Label htmlFor="description">
                                <h4 className="f-Staatliches">
                                    Add file description
                                </h4>
                            </Label>
                            <Input
                                type="textarea"
                                id="description"
                                name="description"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.description}
                                placeHolder="Add your description here..."/>
                        </div>
                        <div className="d-flex justify-content-end mt-2">
                            <button className="btn btn-gradient-success f-Staatliches text-large">
                                {
                                    createSourceFileLoader ? <Spinner className="text-light" /> : <div className="d-flex align-items-end">
                                        <Upload size={23} className="text-light mr-1"/>
                                        Send the file
                                    </div>
                                }
                            </button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
            {/*//////////////////////*/}
            {/*Modal ended*/}
            {/*//////////////////////*/}
            {/*<Row>*/}
            {/*    <div className="p-1">*/}
            {/*        <h1 className="font-large-1 f-Staatliches p-0">What customer think about the order ?</h1>*/}
            {/*    </div>*/}
            {/*    <div className="w-100 d-flex flex-wrap">*/}
            {/*        <ReviewCard/>*/}
            {/*        <ReviewCard/>*/}
            {/*        <ReviewCard/>*/}
            {/*    </div>*/}
            {/*</Row>*/}
        </div>
    } else {
        return <CookingLoader/>
    }
}

export default OrderDetailsView