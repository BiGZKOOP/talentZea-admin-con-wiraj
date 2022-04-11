import {
    Accordion,
    AccordionBody,
    AccordionHeader, AccordionItem,
    Button,
    Card, CardBody, CardFooter, CardHeader,
    Col,
    Form,
    Input,
    Label,
    Row,
    Spinner
} from "reactstrap"
import {useFormik} from "formik"
import {useEffect, useState} from "react"
import "../../assets/css/mainCategory.css"
import "../../assets/css/serviceViews.css"
import {Circle, Delete, Gift, PlusSquare, Upload} from "react-feather"
import {fireAlertCustom, fireAlertError} from "../../utility/customUtils"
import {useDispatch, useSelector} from "react-redux"
import {getAllMainCatListen} from "../MainCategoryView/actions"
// eslint-disable-next-line no-unused-vars
import {createSubCatServiceListen} from "../SubCategoryView/action"
import {useHistory} from "react-router-dom"

const SubCategoryCreate = () => {

    // eslint-disable-next-line no-unused-vars
    const {mainCat, mainCatLoading} = useSelector(state => state.mainCatViewReducer)
    const {subCatCreateLoading} = useSelector(state => state.subCatReducer)

    const [image1, setImage1] = useState()
    const [image2, setImage2] = useState()
    const [image3, setImage3] = useState()

    const [faqQuestion, setFaqQuestion] = useState("")
    const [faqAnswer, setFaqAnswer] = useState("")
    // eslint-disable-next-line no-unused-vars
    const [testIndex, setTestIndex] = useState(0)

    //This contains all the FAQ object array
    const [faq, setFaq] = useState([])

    // eslint-disable-next-line no-unused-vars
    const dispatch = useDispatch()

    // eslint-disable-next-line no-unused-vars
    const history = useHistory()

    //Use this to cook the main cat create object
    // eslint-disable-next-line no-unused-vars
    const cookDataObject = (values) => {
        return {
            ...values,
            faq,
            image1,
            image2,
            image3
        }
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
        dispatch(createSubCatServiceListen(cookDataObject(values), history))
        return true
    }

    const formik = useFormik({
        initialValues: {
            mainTopic: "",
            description: "",
            subTopic: "We create memories here",
            mainService: "",
            price: ""
        },
        onSubmit: values => {
            validate(values)
        }
    })

    const handleImage1 = () => {

        if (image1) {
            return <Label htmlFor="image1">
                <img width="350px" height="300px" className="object-fit scalable radius-10"
                     src={URL.createObjectURL(image1)}/>
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
                <img width="350px" height="300px" className="object-fit scalable radius-10"
                     src={URL.createObjectURL(image2)}/>
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
                <img width="350px" height="300px" className="object-fit scalable radius-10"
                     src={URL.createObjectURL(image3)}/>
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

    // eslint-disable-next-line no-unused-vars
    const removeFAQ = (e, index) => {
        e.preventDefault()
        const tempArr = faq
        tempArr.splice(index, 1)
        setFaq(tempArr)
        setFaq(faq.concat())
    }

    useEffect(() => {
        dispatch(getAllMainCatListen())
    }, [])

    return <div className="p-1">
        <Form onSubmit={formik.handleSubmit}>
            <Card className="p-1">
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
                        placeholder="Enter main topic..."/>
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
                    <Col className="mt-2" lg={3}>
                        <Label htmlFor="price" className="text-small mb-1">Sub service price</Label>
                        <Input
                            name="price"
                            onChange={formik.handleChange}
                            value={formik.values.price}
                            id="price"
                            placeholder="Price from dollar..."/>
                    </Col>
                </Row>
                <Col className="mt-5">
                    <div className="d-flex justify-content-between">
                        <div>
                            {handleImage1()}
                            <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden/>
                        </div>
                        <div>
                            {handleImage2()}
                            <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden/>
                        </div>
                        <div>
                            {handleImage3()}
                            <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden/>
                        </div>
                    </div>
                </Col>
            </Card>
            <div className="mt-5">
                <Col>
                    <Card className="p-1">
                        <div className="mb-2 d-flex align-items-baseline">
                            <Circle size={15} className="mr-1"/>
                            <h3>Add FAQ</h3>
                        </div>
                        <div>
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
                        </div>
                        <div className="d-flex justify-content-end mt-2">
                            <button className="btn btn-primary" onClick={(e) => addFAQ(e)}>Add FAQ</button>
                        </div>
                    </Card>
                    <div>
                        <div style={{height: "400px"}} className="overflow-auto p-1 radius-10 shadow-inner">
                            {
                                faq.length > 0 ? faq.map((e, index) => {
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
                                        <Gift className="mb-2 text-primary"/>
                                        <h2 className="f-Londrina text-success">Your FAQ will be shown here...</h2>
                                    </div>
                            }
                        </div>
                    </div>
                </Col>
            </div>
            <Col className="d-flex justify-content-end mt-3 mb-2">
                <button type="submit" className="btn btn-primary d-flex d-center text-small">
                    {
                        subCatCreateLoading && <Spinner className="spinner text-small mr-1"/>
                    }
                    Create main service
                </button>
            </Col>
        </Form>
    </div>
}

export default SubCategoryCreate