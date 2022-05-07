import {Button, Card, Col, Form, Input, Label, Row, Spinner} from "reactstrap"
import {useFormik} from "formik"
import {useEffect, useState} from "react"
import "../../assets/css/mainCategory.css"
import {PlusSquare, Upload} from "react-feather"
import {fireAlertError} from "../../utility/customUtils"
import {useDispatch, useSelector} from "react-redux"
import {useHistory} from "react-router-dom"
import {createMainCatListen} from "../../custom-views/MainCategoryCreate/actions"
import {getMainServiceByIdListen, updateMainServiceByListen} from "../../custom-views/MainCategoryProfile/actions"

const MainCatCreate = () => {

    const pathname = window.location.pathname
    const id = pathname.split("/main-category/create/")[1]

    const [image1, setImage1] = useState()
    const [image2, setImage2] = useState()
    const [image3, setImage3] = useState()
    const [load, setLoad] = useState(true)

    const dispatch = useDispatch()
    const history = useHistory()

    const {createLoader} = useSelector(state => state.mainCatCreateReducer)
    // eslint-disable-next-line no-unused-vars
    const {mainCatUpdateLoading, mainCatPreviewLoading, mainCatPreview} = useSelector(state => state.mainCatPreviewReducer)

    //Use this to cook the main cat create object
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

        if (!id) {
            dispatch(createMainCatListen(cookDataObject(values), history))
        } else {
            dispatch(updateMainServiceByListen(cookDataObject(values), id))
        }
        return true
    }

    const formik = useFormik({
        initialValues: {
            mainTopic: "",
            mainTopicDescription: ""
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

    // eslint-disable-next-line no-unused-vars
    const populateMainCat = () => {
        setLoad(!load)
        formik.values.mainTopic = mainCatPreview?.requestMainService?.mainTopic
        formik.values.mainTopicDescription = mainCatPreview?.requestMainService?.mainTopicDescription
    }

    // eslint-disable-next-line no-unused-vars
    const cleanState = () => {
        formik.values.mainTopic = ""
        formik.values.mainTopicDescription = ""
    }

    useEffect(() => {
        populateMainCat()
        if (!mainCatPreview) {
            dispatch(getMainServiceByIdListen(id))
        }
    }, [mainCatPreviewLoading])

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
                    type='textarea'
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
                {
                    !id && <button hidden={id} type="submit"
                                   className="btn btn-gradient-primary f-Staatliches font-large-1 d-flex d-center text-small">
                        {
                            createLoader && <Spinner className="spinner text-small mr-1"/>
                        }
                        Create main service
                    </button>
                }
                {
                    id && <button hidden={!id} type="submit"
                                  className="btn btn-gradient-success f-Staatliches font-large-1 d-flex d-center text-small">
                        {
                            mainCatUpdateLoading && <Spinner className="spinner text-small mr-1"/>
                        }
                        Update main service
                    </button>
                }
            </Col>
        </Form>
    </Card>
}

export default MainCatCreate