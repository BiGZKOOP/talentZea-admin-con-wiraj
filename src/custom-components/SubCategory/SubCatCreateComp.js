import {Card, CardBody, CardHeader, Col, Form, Input, Label, Row, Spinner} from "reactstrap"
import {Delete, Gift, Upload} from "react-feather"
import {useDispatch, useSelector} from "react-redux"
import {useEffect, useState} from "react"
import {useHistory} from "react-router-dom"
import {checkBool, fireAlertCustom, fireAlertError} from "../../utility/customUtils"
// eslint-disable-next-line no-unused-vars
import {
    createSubCatServiceListen,
    getSubServiceByIDListen,
    updateSubServiceByIDListen
} from "../../custom-views/SubCategoryView/action"
import {useFormik} from "formik"
import {getAllMainCatListen} from "../../custom-views/MainCategoryView/actions"

// eslint-disable-next-line no-unused-vars
const SubCatCreateComp = ({data}) => {

    const pathname = window.location.pathname
    const id = pathname.split("/sub-category/create/")[1]

    const {mainCat, mainCatLoading} = useSelector(state => state.mainCatViewReducer)
    const {subCatCreateLoading, singleSubCat, subCatUpdateLoading} = useSelector(state => state.subCatReducer)

    const [image1, setImage1] = useState()
    const [image2, setImage2] = useState()
    const [image3, setImage3] = useState()
    const [image4, setImage4] = useState()
    const [image5, setImage5] = useState()
    const [image6, setImage6] = useState()
    const [image7, setImage7] = useState()
    const [image8, setImage8] = useState()
    const [image9, setImage9] = useState()
    const [image10, setImage10] = useState()

//Extras states
    const [revisions, setRevisions] = useState({
        hide: true,
        price: 0,
        count: 0
    })
    const [sourceFiles, setSourceFiles] = useState({
        hide: false,
        price: 0
    })
    const [expressDelivery, setExpressDelivery] = useState({
        hide: false,
        price: 0,
        count: 0
    })

    const [faqQuestion, setFaqQuestion] = useState("")
    const [faqAnswer, setFaqAnswer] = useState("")

//This contains all the FAQ object array
    const [faq, setFaq] = useState([])

    const dispatch = useDispatch()

    // eslint-disable-next-line no-unused-vars
    const history = useHistory()

    const cookDataObject = (values) => {
        return {
            ...values,
            faq,
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            image7,
            image8,
            image9,
            image10,
            revisions,
            sourceFiles,
            expressDelivery
        }
    }

    const updateSubServiceByID = (values) => {
        dispatch(updateSubServiceByIDListen(cookDataObject(values), singleSubCat._id))
    }

    const validate = (values) => {

        if (!values.mainTopic) {
            fireAlertError("Hmm..", "You need to give a main topic !")
            return false
        }

        if (!values.description) {
            fireAlertError("Hmm..", "You need to give a main topic description !")
            return false
        }

        if (!values.mainService) {
            fireAlertError("Hmm..", "You need to select a main service !")
            return false
        }

        if (!image1) {
            fireAlertError("Hmm..", "You need must upload the image 1 !")
            return false
        }

        if (!image2) {
            fireAlertError("Hmm..", "You need must upload the image 2 !")
            return false
        }

        if (!image3) {
            fireAlertError("Hmm..", "You need must upload the image 3 !")
            return false
        }

        if (!values.orderTopic) {
            fireAlertError("Hmm..", "You need to add a order topic !")
            return false
        }

        if (!values.price) {
            fireAlertError("Hmm..", "You need to add a order price !")
            return false
        }

        if (!values.deliveryTime) {
            fireAlertError("Hmm..", "You need to add a order delivery time !")
            return false
        }

        if (!values.orderDescription) {
            fireAlertError("Hmm..", "You need to add a order description !")
            return false
        }
        // console.log(cookDataObject(values))
        if (id) updateSubServiceByID(values)
        else {
            dispatch(createSubCatServiceListen(cookDataObject(values), history))
        }

        return true
    }

    const formik = useFormik({
        initialValues: {
            mainTopic: "",
            description: "",
            subTopic: "We create memories here",
            mainService: "",
            orderTopic: "",
            orderDescription: "",
            deliveryTime: "",
            price: ""
        },
        onSubmit: values => {
            validate(values)
        }
    })

    const harvestBinaryData = (object) => {
        const binaryData = []
        binaryData.push(object)
        return binaryData
    }

    const handleImage1 = () => {

        if (image1) {
            return <Label htmlFor="image1">
                <img width="250px" height="200px" className="object-fit scalable radius-10"
                     src={URL.createObjectURL(new Blob(harvestBinaryData(image1), {type: "application/zip"}))}/>
            </Label>
        } else {
            return <Label htmlFor="image1">
                <div className="main-cat-upload-card d-center flex-column">
                    <Upload size={50}/>
                    <p className="text-small mt-1">Upload image 1</p>
                </div>
            </Label>
        }
    }

    const handleImage2 = () => {

        if (image2) {
            return <Label htmlFor="image2">
                <img width="250px" height="200px" className="object-fit scalable radius-10"
                     src={URL.createObjectURL(new Blob(harvestBinaryData(image2)))}/>
            </Label>
        } else {
            return <Label htmlFor="image2">
                <div className="main-cat-upload-card d-center flex-column">
                    <Upload size={50}/>
                    <p className="text-small mt-1">Upload image 2</p>
                </div>
            </Label>
        }
    }

    const handleImage3 = () => {

        if (image3) {
            return <Label htmlFor="image3">
                <img width="250px" height="200px" className="object-fit scalable radius-10"
                     src={URL.createObjectURL(new Blob(harvestBinaryData(image3)))}/>
            </Label>
        } else {
            return <Label htmlFor="image3">
                <div className="main-cat-upload-card d-center flex-column">
                    <Upload size={50}/>
                    <p className="text-small mt-1">Upload image 3</p>
                </div>
            </Label>
        }
    }

    const handleImage4 = () => {

        if (image4) {
            return <Label htmlFor="image4">
                <img width="250px" height="200px" className="object-fit scalable radius-10"
                     src={URL.createObjectURL(new Blob(harvestBinaryData(image4)))}/>
            </Label>
        } else {
            return <Label htmlFor="image4">
                <div className="main-cat-upload-card d-center flex-column">
                    <Upload size={50}/>
                    <p className="text-small mt-1">Upload image 4</p>
                </div>
            </Label>
        }
    }

    const handleImage5 = () => {

        if (image5) {
            return <Label htmlFor="image5">
                <img width="250px" height="200px" className="object-fit scalable radius-10"
                     src={URL.createObjectURL(new Blob(harvestBinaryData(image5)))}/>
            </Label>
        } else {
            return <Label htmlFor="image5">
                <div className="main-cat-upload-card d-center flex-column">
                    <Upload size={50}/>
                    <p className="text-small mt-1">Upload image 5</p>
                </div>
            </Label>
        }
    }

    const handleImage6 = () => {

        if (image6) {
            return <Label htmlFor="image6">
                <img width="250px" height="200px" className="object-fit scalable radius-10"
                     src={URL.createObjectURL(new Blob(harvestBinaryData(image6)))}/>
            </Label>
        } else {
            return <Label htmlFor="image6">
                <div className="main-cat-upload-card d-center flex-column">
                    <Upload size={50}/>
                    <p className="text-small mt-1">Upload image 6</p>
                </div>
            </Label>
        }
    }

    const handleImage7 = () => {

        if (image7) {
            return <Label htmlFor="image7">
                <img width="250px" height="200px" className="object-fit scalable radius-10"
                     src={URL.createObjectURL(new Blob(harvestBinaryData(image7)))}/>
            </Label>
        } else {
            return <Label htmlFor="image7">
                <div className="main-cat-upload-card d-center flex-column">
                    <Upload size={50}/>
                    <p className="text-small mt-1">Upload image 7</p>
                </div>
            </Label>
        }
    }

    const handleImage8 = () => {

        if (image8) {
            return <Label htmlFor="image8">
                <img width="250px" height="200px" className="object-fit scalable radius-10"
                     src={URL.createObjectURL(new Blob(harvestBinaryData(image8)))}/>
            </Label>
        } else {
            return <Label htmlFor="image8">
                <div className="main-cat-upload-card d-center flex-column">
                    <Upload size={50}/>
                    <p className="text-small mt-1">Upload image 8</p>
                </div>
            </Label>
        }
    }

    const handleImage9 = () => {

        if (image9) {
            return <Label htmlFor="image9">
                <img width="250px" height="200px" className="object-fit scalable radius-10"
                     src={URL.createObjectURL(new Blob(harvestBinaryData(image9)))}/>
            </Label>
        } else {
            return <Label htmlFor="image9">
                <div className="main-cat-upload-card d-center flex-column">
                    <Upload size={50}/>
                    <p className="text-small mt-1">Upload image 9</p>
                </div>
            </Label>
        }
    }

    const handleImage10 = () => {

        if (image10) {
            return <Label htmlFor="image10">
                <img width="250px" height="200px" className="object-fit scalable radius-10"
                     src={URL.createObjectURL(new Blob(harvestBinaryData(image10)))}/>
            </Label>
        } else {
            return <Label htmlFor="image10">
                <div className="main-cat-upload-card d-center flex-column">
                    <Upload size={50}/>
                    <p className="text-small mt-1">Upload image 10</p>
                </div>
            </Label>
        }
    }

//Use this to clean the faq states (faqQuestion & faqAnswer)
    const cleanFAQState = () => {
        setFaqAnswer("")
        setFaqQuestion("")
    }

//Use this to cook the FAQ object (must contains question & answer)
    const addFAQ = (e) => {
        e.preventDefault()

        if (!faqQuestion) {
            fireAlertCustom("Hmm...", "You need to add a question !")
            return
        }

        if (!faqAnswer) {
            fireAlertCustom("Hmm...", "You need to add a answer !")
            return
        }

        setFaq(faq.concat({
            question: faqQuestion,
            answers: faqAnswer
        }))
        cleanFAQState()
    }

    const removeFAQ = (e, index) => {
        e.preventDefault()
        const tempArr = faq
        tempArr.splice(index, 1)
        setFaq(tempArr)
        setFaq(faq.concat())
    }

    const cleanExtraStates = (index) => {

        switch (index) {
            case 1:
                setRevisions({
                    hide: true,
                    count: 0,
                    price: 0
                })
                break
            case 2:
                setSourceFiles({
                    hide: !sourceFiles.hide,
                    price: 0
                })
                break
            case 3:
                setExpressDelivery({
                    hide: !expressDelivery.hide,
                    count: 0,
                    price: 0
                })
                break
            default:
                break
        }
    }

    //Use this to populate the formik on load if the component have data
    const populateFormikData = () => {
        formik.values.mainTopic = singleSubCat?.mainTopic
        formik.values.description = singleSubCat?.description
        formik.values.subTopic = singleSubCat?.subTopic
        formik.values.mainService = singleSubCat?.mainService
        formik.values.orderTopic = singleSubCat?.orderTopic
        formik.values.orderDescription = singleSubCat?.orderDescription
        formik.values.deliveryTime = singleSubCat?.deliveryTime
        formik.values.price = singleSubCat?.price
        setFaq(singleSubCat?.faq)
        setExpressDelivery({
            hide: checkBool(singleSubCat?.expressDelivery?.hide),
            count: singleSubCat?.expressDelivery?.count,
            price: singleSubCat?.expressDelivery?.price
        })
        setSourceFiles({
            hide: checkBool(singleSubCat?.sourceFiles?.hide),
            price: singleSubCat?.sourceFiles?.price
        })
        setRevisions({
            hide: checkBool(singleSubCat?.revisions?.hide),
            count: singleSubCat?.revisions?.count,
            price: singleSubCat?.revisions?.price
        })
    }

    const cleanState = () => {
        formik.values.mainTopic = ""
        formik.values.description = ""
        formik.values.mainService = ""
        formik.values.orderTopic = ""
        formik.values.orderDescription = ""
        formik.values.deliveryTime = ""
        formik.values.price = ""
        setFaq([])
        setExpressDelivery({
            hide: false,
            price: 0,
            count: 0
        })
        setSourceFiles({
            hide: false,
            price: 0
        })
        setRevisions({
            hide: true,
            price: 0,
            count: 0
        })
    }

    //Form data set useEffect
    useEffect(() => {
        if (singleSubCat) populateFormikData()

        if (!id) {
            cleanState()
        }
    }, [])

    useEffect(() => {
        if (!singleSubCat) {
            dispatch(getSubServiceByIDListen(id))
            dispatch(getAllMainCatListen())
        }
    }, [])

    return <div className="p-1">
        <Form onSubmit={formik.handleSubmit}>
            <Card className="p-0">
                <CardHeader className="m-0 bg-gradient-primary">
                    <h1 className="m-0 p-0 text-light f-Staatliches">Add Images</h1>
                </CardHeader>
                <CardBody className="mt-1">
                    <Col>
                        <Label htmlFor="main" className="text-small mb-1">Main topic</Label>
                        <Input
                            id="mainTopic"
                            name="mainTopic"
                            onChange={formik.handleChange}
                            value={formik.values.mainTopic}
                            placeholder="Enter main topic..."/>
                    </Col>
                    <Col className="mt-2">
                        <Label htmlFor="main" className="text-small mb-1">Service description</Label>
                        <Input
                            type="textarea"
                            id="description"
                            name="description"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                            placeholder="Add a adescription here..."/>
                    </Col>
                    <Row>
                        <Col className="mt-2" lg={3}>
                            <Label htmlFor="main" className="text-small mb-1">Select </Label>
                            <Card>
                                <select
                                    className="custom-dropdown bg-instagram text-light"
                                    id="mainService"
                                    name="mainService"
                                    onChange={formik.handleChange}
                                    value={formik.values.mainService}
                                    placeholder="Select main service...">
                                    <option>Select main service</option>
                                    {
                                        mainCat?.map((e, index) => {
                                            if (mainCatLoading) return <option key={index}>Loading...</option>
                                            else return <option key={index} value={e._id}>{e.mainTopic}</option>
                                        })
                                    }
                                </select>
                            </Card>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            <Card className="mt-3">
                <CardHeader className="m-0 bg-primary">
                    <h1 className="m-0 p-0 text-light f-Staatliches">Add Order cards</h1>
                </CardHeader>
                <CardBody>
                    <div className="mt-2">
                        <Label htmlFor="txtOrderCardTopic" className="text-small mb-1">Order card topic</Label>
                        <Input
                            id="orderTopic"
                            name="orderTopic"
                            onChange={formik.handleChange}
                            value={formik.values.orderTopic}
                            placeholder="Order card topic..."/>
                    </div>
                    <div className="mt-2">
                        <Label htmlFor="orderDescription" className="text-small mb-1">Order card description</Label>
                        <Input
                            type="textarea"
                            id="orderDescription"
                            name="orderDescription"
                            onChange={formik.handleChange}
                            value={formik.values.orderDescription}
                            placeholder="Order card description..."/>
                    </div>
                    <Row className="mt-2">
                        <Col lg={4}>
                            <Label htmlFor="txtOrderCardPrice" className="text-small mb-1">Order card price</Label>
                            <Input
                                type="number"
                                id="price"
                                name="price"
                                onChange={formik.handleChange}
                                value={formik.values.price}
                                placeholder="Enter your price..."/>
                        </Col>
                        <Col lg={3}>
                            <Label htmlFor="txtOrderCardDeliveryTime" className="text-small mb-1">Order delivery
                                time</Label>
                            <Input
                                type="number"
                                id="deliveryTime"
                                name="deliveryTime"
                                onChange={formik.handleChange}
                                value={formik.values.deliveryTime}
                                placeholder="Add delivery time..."/>
                        </Col>
                        <div className="mt-3">
                            <hr/>
                        </div>
                        <Row className="mt-3">
                            <Col className="mb-2">
                                <h1 className="f-Staatliches">Add Extras</h1>
                            </Col>
                            <Col lg={12}>
                                {/*<Row lg={12} className="d-flex">*/}
                                {/*<Col lg={4}>*/}
                                {/*    <Label htmlFor="revisionsCount" className="text-small mb-1">*/}
                                {/*        Maximum revisions count*/}
                                {/*    </Label>*/}
                                {/*    <div className="d-flex d-center">*/}
                                {/*        <Input*/}
                                {/*            onChange={e => setRevisions({*/}
                                {/*                ...revisions,*/}
                                {/*                count: e.target.value*/}
                                {/*            })}*/}
                                {/*            value={revisions.count}*/}
                                {/*            disabled={revisions.hide}*/}
                                {/*            placeholder="Max revision count..."*/}
                                {/*            id="revisionsC|ount" type="number" name="revisionsCount"/>*/}
                                {/*    </div>*/}
                                {/*</Col>*/}
                                {/*<Col lg={4}>*/}
                                {/*    <Label htmlFor="revisionsPrice" className="text-small mb-1">*/}
                                {/*        Per revisions price*/}
                                {/*    </Label>*/}
                                {/*    <Input*/}
                                {/*        onChange={e => setRevisions({*/}
                                {/*            ...revisions,*/}
                                {/*            price: e.target.value*/}
                                {/*        })}*/}
                                {/*        value={revisions.price}*/}
                                {/*        disabled={revisions.hide}*/}
                                {/*        placeholder="Per revisions price..."*/}
                                {/*        id="revisionsPrice" type="number" name="revisionsPrice"/>*/}
                                {/*</Col>*/}
                                {/*<Col lg={3} className="d-flex align-items-end">*/}
                                {/*    <div className='form-switch form-check-success ml-2'>*/}
                                {/*        <Input*/}
                                {/*            onChange={() => {*/}
                                {/*                cleanExtraStates(1)*/}
                                {/*            }}*/}
                                {/*            type='switch' id='switch-primary' name='primary'*/}
                                {/*            checked={!revisions.hide}/>*/}
                                {/*    </div>*/}
                                {/*</Col>*/}
                                {/*</Row>*/}
                                <Row>
                                    <Col lg={3}>
                                        <Label htmlFor="sourceFiles" className="text-small mb-1">
                                            Source files included price
                                        </Label>
                                        <Input
                                            onChange={(e) => {
                                                setSourceFiles({
                                                    ...sourceFiles,
                                                    price: e.target.value
                                                })
                                            }}
                                            value={sourceFiles.price}
                                            disabled={sourceFiles.hide}
                                            placeholder="source files included price..."
                                            id="sourceFiles" type="number" name="sourceFiles"/>
                                    </Col>
                                    <Col lg={3} className="d-flex align-items-end">
                                        <div className='form-switch form-check-success ml-2'>
                                            <Input
                                                onChange={() => {
                                                    setSourceFiles({
                                                        ...sourceFiles,
                                                        hide: !sourceFiles.hide
                                                    })
                                                    cleanExtraStates(2)
                                                }
                                                }
                                                type='switch' id='switch-primary' name='primary'
                                                checked={!sourceFiles.hide}/>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="mt-3 d-flex">
                                    <Col lg={3} className="">
                                        <Label htmlFor="expressDeliveryPrice" className="text-small mb-1">
                                            8 hours delivery price {sourceFiles.hide.toString()}
                                        </Label>
                                        <Input
                                            onChange={(e) => setExpressDelivery({
                                                ...expressDelivery,
                                                price: e.target.value
                                            })
                                            }
                                            disabled={expressDelivery.hide}
                                            value={expressDelivery.price}
                                            placeholder="express delivery price..."
                                            id="expressDeliveryPrice" type="number" name="expressDeliveryPrice"/>
                                    </Col>
                                    <Col lg={3} className="d-flex align-items-end">
                                        <div className='form-switch form-check-success ml-2'>
                                            <Input
                                                onChange={() => {
                                                    cleanExtraStates(3)
                                                }
                                                }
                                                type='switch' id='switch-primary' name='primary'
                                                checked={!expressDelivery.hide}/>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Row>
                </CardBody>
            </Card>
            <div className="mt-5">
                <Card className="p-0">
                    <CardHeader className="m-0 bg-gradient-primary">
                        <h1 className="m-0 p-0 text-light f-Staatliches">Add FAQ</h1>
                    </CardHeader>
                    <CardBody className="mt-2">
                        <div className="mb-1">
                            <Label htmlFor="question" className="text-small mb-1">Question</Label>
                            <Input className="text" placeholder="question here..." value={faqQuestion}
                                   onChange={e => setFaqQuestion(e.target.value)}/>
                        </div>
                        <div>
                            <Label htmlFor="question" className="text-small mb-1">Answer</Label>
                            <Input className="text" placeholder="answer here..." value={faqAnswer}
                                   onChange={e => setFaqAnswer(e.target.value)}/>
                        </div>
                    </CardBody>
                    <div className="d-flex justify-content-end mt-2 p-2">
                        <button className="btn btn-gradient-primary f-Staatliches text-large"
                                onClick={(e) => addFAQ(e)}>Add FAQ
                        </button>
                    </div>
                </Card>
                <div>
                    <div style={{height: "400px"}} className="overflow-auto p-1 radius-10 shadow-inner">
                        {
                            faq?.length > 0 ? faq.map((e, index) => {
                                return <div key={index} className="radius-10 mb-3 dashed-faq ">
                                    <CardHeader className="p-1">{e.question}</CardHeader>
                                    <hr/>
                                    <CardBody className="p-1 d-flex">
                                        <div className="flex-grow-10 word-break">
                                            <p>{e.answers}</p>
                                        </div>
                                        <div className="flex-grow-1">
                                            <button className="btn" onClick={(e) => removeFAQ(e, index)}><Delete/>
                                            </button>
                                        </div>
                                    </CardBody>
                                </div>
                            }) : <div className="w-100 h-100 d-center animate__animated animate__bounce flex-column">
                                <Gift className="mb-2 text-dark"/>
                                <h2 className="f-Londrina text-dark">Your FAQ will be shown here...</h2>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <Card className="p-0 mt-3">
                <CardHeader className="m-0 bg-gradient-primary">
                    <h1 className="m-0 p-0 text-light f-Staatliches">Add Images</h1>
                </CardHeader>
                <CardBody className="mt-5">
                    <div className="d-flex flex-wrap d-center">
                        <div className="mt-2 mr-1">
                            {handleImage1()}
                            <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden/>
                        </div>
                        <div className="mt-2 mr-1">
                            {handleImage2()}
                            <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden/>
                        </div>
                        <div className="mt-2 mr-1">
                            {handleImage3()}
                            <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden/>
                        </div>
                        <div className="mt-2 mr-1">
                            {handleImage4()}
                            <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden/>
                        </div>
                        <div className="mt-2 mr-1">
                            {handleImage5()}
                            <input onChange={(e) => setImage5(e.target.files[0])} type="file" id="image5" hidden/>
                        </div>
                        <div className="mt-2 mr-1">
                            {handleImage6()}
                            <input onChange={(e) => setImage6(e.target.files[0])} type="file" id="image6" hidden/>
                        </div>
                        <div className="mt-2 mr-1">
                            {handleImage7()}
                            <input onChange={(e) => setImage7(e.target.files[0])} type="file" id="image7" hidden/>
                        </div>
                        <div className="mt-2 mr-1">
                            {handleImage8()}
                            <input onChange={(e) => setImage8(e.target.files[0])} type="file" id="image8" hidden/>
                        </div>
                        <div className="mt-2 mr-1">
                            {handleImage9()}
                            <input onChange={(e) => setImage9(e.target.files[0])} type="file" id="image9" hidden/>
                        </div>
                        <div className="mt-2 mr-1">
                            {handleImage10()}
                            <input onChange={(e) => setImage10(e.target.files[0])} type="file" id="image10" hidden/>
                        </div>
                    </div>
                </CardBody>
            </Card>
            <Col className="d-flex justify-content-end mt-3 mb-2">
                {
                    !id && <button hidden={id} type="submit"
                                   className="btn btn-gradient-primary f-Staatliches font-large-1 d-flex d-center text-small">
                        {
                            subCatCreateLoading && <Spinner className="spinner text-small mr-1"/>
                        }
                        Create main service
                    </button>
                }
                {
                    id && <button hidden={!id} type="submit"
                                  className="btn btn-gradient-success f-Staatliches font-large-1 d-flex d-center text-small">
                        {
                            subCatUpdateLoading && <Spinner className="spinner text-small mr-1"/>
                        }
                        Update main service
                    </button>
                }
            </Col>
        </Form>
    </div>
}

export default SubCatCreateComp