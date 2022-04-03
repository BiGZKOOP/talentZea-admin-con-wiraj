import {Button, Card, Col, Form, Input, Label, Row} from "reactstrap"
import {useFormik} from "formik"
import {useState} from "react"
import "../../assets/css/mainCategory.css"
import {PlusSquare, Upload} from "react-feather"
import {fireAlertError} from "../../utility/customUtils"
import {useDispatch} from "react-redux"

const SubCategoryCreate = () => {

    const [image1, setImage1] = useState()
    const [image2, setImage2] = useState()
    const [image3, setImage3] = useState()

    // eslint-disable-next-line no-unused-vars
    const dispatch = useDispatch()

    //Use this to cook the main cat create object
    // eslint-disable-next-line no-unused-vars
    const cookDataObject = (values) => {

        return {
            ...values,
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

        if (!values.mainTopicDescription) {
            fireAlertError("Hmm..", "You need to give a main topic description !")
            return false
        }

        // dispatch(createMainCatListen(cookDataObject(values)))
        return true
    }

    const formik = useFormik({
        initialValues: {
            mainTopic: "",
            description: "",
            mainService: "",
            mainTopicDescription: "",
            faq: []
        },
        onSubmit: values => {
            validate(values)
        }
    })

    const handleImage1 = () => {

        if (image1) {
            return <Label htmlFor="image1">
                <img width="350px" height="300px" className="object-fit scalable radius-10" src={URL.createObjectURL(image1)}/>
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
                <img width="350px" height="300px" className="object-fit scalable radius-10" src={URL.createObjectURL(image2)}/>
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
                <img width="350px" height="300px" className="object-fit scalable radius-10" src={URL.createObjectURL(image3)}/>
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

    return <Card className="p-1">
        <Form onSubmit={formik.handleSubmit}>
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
                    id="mainTopicDescription"
                    name="mainTopicDescription"
                    onChange={formik.handleChange}
                    value={formik.values.mainTopicDescription}
                    placeholder="Enter main topic..."/>
            </Col>
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
            <Col className="d-flex justify-content-end mt-3 mb-2">
                <button type="submit" className="btn btn-primary">Create main service</button>
            </Col>
        </Form>
    </Card>
}

export default SubCategoryCreate