import {Card, CardBody, CardHeader, Col, Row, Spinner} from "reactstrap"
import Timeline from "../../@core/components/timeline"
// import {time_linedata} from "./consts"
import Avatar from "../../@core/components/avatar"
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {getOrderByIDListen, getOrderTimeLineByIDListen} from "../OrderView/actions"
import CookingLoader from "../../custom-components/CookingLoader"
import moment from "moment"
import ReviewCard from "../../custom-components/orderView/ReviewCard"

const OrderDetailsView = () => {

    const pathname = window.location.pathname
    const id = pathname.split("/order-details/")[1]

    const dispatch = useDispatch()

    const {singleOrder, singleOrderLoader, timeLineData, timeLineLoader} = useSelector(state => state.orderReducer)

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

    const timelineMsgHandler = (orderLog) => {

        switch (orderLog?.logStatus) {
            case 0:
                return {
                    title: 'Created the project',
                    content: `New project has started by ${orderLog?.customerID?.firstName}`,
                    meta: moment(orderLog?.createdAt).format("LL"),
                    color: 'warning',
                    customContent: (
                        <div className='d-flex align-items-center mb-50'>
                            <Avatar
                                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeriYGQjOOecu23m2gqPoc1_Dz5Phrr4uKWwNMnwyQxUYDgCUqOHiwv0Jph1MU5Kzf0g&usqp=CAU"
                                imgHeight={38} imgWidth={38}/>
                            <div className='ms-50'>
                                <h6 className='mb-0'>Leonains (Client)</h6>
                                <span>CEO of Pixinvent</span>
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
            default: break
        }
    }

    const cookTimeLineData = () => {

        // eslint-disable-next-line no-unused-vars
        const timeLineArr = []

        timeLineData.map(e => {
            timeLineArr.push(timelineMsgHandler(e))
        })

        return timeLineArr

        return [
            {
                title: 'User login',
                content: 'User login at 2:12pm',
                meta: '12 mins ago'
            },
            {
                title: 'Meeting with john',
                content: 'React Project meeting with john @10:15am',
                meta: '45 mins ago',
                color: 'warning',
                customContent: (
                    <div className='d-flex align-items-center mb-50'>
                        <Avatar
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeriYGQjOOecu23m2gqPoc1_Dz5Phrr4uKWwNMnwyQxUYDgCUqOHiwv0Jph1MU5Kzf0g&usqp=CAU"
                            imgHeight={38} imgWidth={38}/>
                        <div className='ms-50'>
                            <h6 className='mb-0'>Leonains (Client)</h6>
                            <span>CEO of Pixinvent</span>
                        </div>
                    </div>
                )
            },
            {
                title: 'Create a new react project for client',
                content: 'Add files to new design folder',
                meta: '2 days ago',
                color: 'info'
            }
        ]
    }

    useEffect(() => {
        dispatch(getOrderByIDListen(id))
        dispatch(getOrderTimeLineByIDListen(id))
    }, [])

    if (!singleOrderLoader) {
        return <div>
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
            <Row>
                <Col sm={12} lg={7}>
                    <div className="mb-2">
                        <h3>Order Timeline</h3>
                    </div>
                    <Card className="mb-5 p-2 bg-semi-dark d-flex">
                        {
                            !timeLineLoader ? <Timeline data={cookTimeLineData()}/> : <Spinner />
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
                                <h1 className={`text-${handleStatusPointer(singleOrder?.orderStatus)}`}>Pending</h1>
                            </div>
                            <div className="mt-2">
                                <button className={`btn btn-${handleStatusPointer(singleOrder?.orderStatus)}`}>NEXT
                                    STATE
                                </button>
                            </div>
                        </Card>
                    </div>
                </Col>
            </Row>
            <Row>
                <div className="p-1">
                    <h1 className="font-large-1 f-Staatliches p-0">What customer think about the order ?</h1>
                </div>
                <div className="w-100 d-flex flex-wrap">
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                </div>
            </Row>
        </div>
    } else {
        return <CookingLoader/>
    }
}

export default OrderDetailsView