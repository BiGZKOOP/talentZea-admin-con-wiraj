// import MainNav from "../../custom-components/MainNav/MainNav"
import {Card, CardFooter, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row, Spinner} from "reactstrap"
import CreativeSvg from "../../assets/custom_images/svg/Creative.svg"
import "../../assets/css/serviceViews.css"
import "../../assets/css/dashboard.css"

import {useDispatch, useSelector} from "react-redux"
import {useEffect, useState} from "react"
import {getMainServiceByIdListen, updateMainServiceByListen} from "./actions"
import MainNav from "../../custom-components/MainNav"
import Footer from "../../custom-components/footer/Footer"
import {Edit3, Upload} from "react-feather"
import ContactComp from "../../custom-components/contact-comp"
import {fireAlertError} from "../../utility/customUtils"

const MainServicePreviewView = () => {

    const dispatch = useDispatch()

    const pathname = window.location.pathname

    const id = pathname.split("/service/")[1]

    const [topicModelShow, setTopicModelShow] = useState(false)
    const [descriptionModelShow, setDescriptionModelShow] = useState(false)
    const [imagesModelShow, setImagesModelShow] = useState(false)

    // eslint-disable-next-line no-unused-vars
    const [image1, setImage1] = useState()
    const [image2, setImage2] = useState()
    const [image3, setImage3] = useState()

    const [topicUpdate, setTopicUpdate] = useState("")
    const [descriptionUpadte, setDescriptionUpdate] = useState("")


    // eslint-disable-next-line no-unused-vars
    const {
        mainCatPreview,
        mainCatPreviewLoading,
        mainCatUpdateLoading
    } = useSelector(state => state.mainCatPreviewReducer)

    useEffect(() => {
        dispatch(getMainServiceByIdListen(id))
    }, [])


    // eslint-disable-next-line no-unused-vars
    const getImageArray = () => {

        return [mainCatPreview?.requestMainService?.image?.image1, mainCatPreview?.requestMainService?.image?.image2, mainCatPreview?.requestMainService?.image?.image3]
    }

    const updateMainServiceByID = (dataObj) => {

        dispatch(updateMainServiceByListen(dataObj))
    }

    const updateTopic = () => {

        if (topicUpdate.length > 5) {
            updateMainServiceByID({
                _id: mainCatPreview?.requestMainService._id,
                mainTopic: topicUpdate
            })
        } else fireAlertError("Oops...", "Your topic must contains at least 5 letter")
    }

    const updateDescription = () => {

        if (descriptionUpadte.length > 5) {
            updateMainServiceByID({
                _id: mainCatPreview?.requestMainService._id,
                mainTopicDescription: descriptionUpadte
            })
        } else fireAlertError("Oops...", "Your description must contains at least 5 words")
    }

    const cookImageObject = () => {

        return {
            _id: mainCatPreview?.requestMainService._id,
            image1,
            image2,
            image3
        }
    }

    const updateImages = () => {

        const imageObject = cookImageObject()

        const {image1, image2, image3} = imageObject

        if (image1 === undefined) {
            delete imageObject["image1"]
        }
        if (image2 === undefined) {
            delete imageObject["image2"]

        }
        if (image3 === undefined) {
            delete imageObject["image3"]
        }

        updateMainServiceByID(imageObject)
    }

    const handleImage1 = () => {

        if (image1) {
            return <Label htmlFor="image1">
                <img width="200px" height="200px" className="object-fit scalable radius-10"
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
                <img width="200px" height="200px" className="object-fit scalable radius-10"
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
                <img width="200px" height="200px" className="object-fit scalable radius-10"
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

    if (mainCatPreviewLoading) return <div
        className="w-100 h-100-v d-center flex-column animate__animated animate__bounce">
        <Spinner className="mb-2"/>
        <p className="text-medium f-Londrina">Cooking your data...</p>
    </div>
    else {
        return <Row>
            <div className="p-1 mb-5 mb-lg-0 w-100 sticky-top-custom">
                <MainNav index={2}/>
            </div>
            <div className="mt-4 mb-5 d-center flex-column">
                <div/>
                <div className="main-img floating-img">
                    <CreativeSvg/>
                </div>
                <div className="position-relative">
                    <h1 className="text-center mt-4 f-Londrina text-primary topic-header">{
                        `${mainCatPreview?.requestMainService?.mainTopic}`
                    }<Edit3
                        onClick={() => setTopicModelShow(!topicModelShow)}
                        size={45} className="ml-2 text-danger clickable cursor-pointer"/></h1>
                </div>
                <h2 className="f-indie-flower">We create memories here !</h2>
            </div>
            <Row className="w-100 d-center mt-5 mb-5">
                <h1 className="text-center mb-3 f-Londrina">What we provide... <Edit3
                    onClick={() => setDescriptionModelShow(!descriptionModelShow)}
                    className="text-danger cursor-pointer clickable"
                    size={25}/></h1>
                <Row className="w-50 ">
                    <p className="text-medium lead text-center">"{mainCatPreview?.requestMainService?.mainTopicDescription}"</p>
                </Row>
            </Row>
            <Col className="mt-5">
                <Col className="text-center">
                    <h1 className="f-Londrina font-large-2">OUR SERVICES</h1>
                </Col>
                <Row className="p-2 mt-3 radius-10  d-center flex-wrap d-flex">
                    {
                        mainCatPreviewLoading &&
                        <div className="d-center flex-column animate__animated animate__bounce">
                            <Spinner className="text-primary mb-2"/>
                            <h1 className="text-primary">Loading...</h1>
                        </div>
                    }
                    {
                        !mainCatPreviewLoading && mainCatPreview?.subMainService?.map((e, index) => {
                            return <Card key={index} className="dash-card m-2 scalable bg-semi-dark">
                                <div className="pt-2">
                                    <h2 className="text-center f-Londrina">{e?.mainTopic}</h2>
                                </div>
                                <CardFooter>
                                    <p>
                                        {e?.description}
                                    </p>
                                </CardFooter>
                                <CardFooter className="d-center">
                                    <button
                                        className="btn btn-outline-foursquare">
                                        SHOW ME...
                                    </button>
                                </CardFooter>
                            </Card>
                        })
                    }
                    <Card className="dash-card m-2 bg-instagram text-light rotatable">
                        <div className="pt-2">
                            <h2 className="text-center f-Londrina text-light ">COMING MORE...</h2>
                        </div>
                        <CardFooter>
                            <p>
                                More services are on the way...!!!
                            </p>
                        </CardFooter>
                    </Card>
                </Row>
            </Col>
            <Row className="mt-5">
                <div className="mt-5">
                    <p className="f-Londrina text-topic text-center font-large-2">Some of our works...
                        <Edit3
                            onClick={() => setImagesModelShow(!imagesModelShow)}
                            className="text-danger cursor-pointer clickable ml-2"
                            size={35}/></p>
                </div>
                <div className="d-flex justify-content-around mt-3 mb-3 position-relative">
                    {
                        getImageArray()?.map((e, index) => {
                            return <div className="w-25">
                                <img src={e} height="200px" width="300px" alt={`swiper ${index}`}
                                     className='object-fit scalable cursor-pointer'/>
                            </div>

                        })
                    }
                </div>
            </Row>
            <div/>
            <ContactComp/>
            <Footer/>
            {/*Topic update model*/}
            <Modal isOpen={topicModelShow} toggle={() => setTopicModelShow(!topicModelShow)}
                   className='modal-dialog-centered modal-md'>
                <ModalHeader className='bg-primary' toggle={() => setTopicModelShow(!topicModelShow)}>
                    <h3 className="text-light">Real time update</h3>
                </ModalHeader>
                <ModalBody className='px-sm-5 mx-50 pb-4 mt-2'>
                    <Label htmlFor="topicId" className="text-medium lead mb-1">Update the topic</Label>
                    <Input id="topicId" placeholder="Service topic here..." value={topicUpdate}
                           onChange={e => setTopicUpdate(e.target.value)}/>
                </ModalBody>
                <ModalFooter>
                    <button
                        onClick={updateTopic}
                        className="btn btn-primary d-center">
                        {mainCatUpdateLoading ? <Spinner size={10}/> : "Update"}
                    </button>
                </ModalFooter>
            </Modal>

            {/*Description update model*/}
            <Modal isOpen={descriptionModelShow} toggle={() => setDescriptionModelShow(!descriptionModelShow)}
                   className='modal-dialog-centered modal-md'>
                <ModalHeader className='bg-primary' toggle={() => setDescriptionModelShow(!descriptionModelShow)}>
                    <h3 className="text-light">Real time update</h3>
                </ModalHeader>
                <ModalBody className='px-sm-5 mx-50 pb-4 mt-2'>
                    <Label htmlFor="topicId" className="text-medium lead mb-1">Update the description</Label>
                    <Input type="textarea" id="topicId" placeholder="Service description here..." value={descriptionUpadte}
                           onChange={e => setDescriptionUpdate(e.target.value)}/>
                </ModalBody>
                <ModalFooter>
                    <button
                        onClick={updateDescription}
                        className="btn btn-primary d-center">
                        {mainCatUpdateLoading ? <Spinner size={10}/> : "Update description"}
                    </button>
                </ModalFooter>
            </Modal>

            {/*service images update model*/}
            <Modal isOpen={imagesModelShow} toggle={() => setImagesModelShow(!imagesModelShow)}
                   className='modal-dialog-centered modal-lg'>
                <ModalHeader className='bg-primary' toggle={() => setImagesModelShow(!imagesModelShow)}/>
                <ModalBody className='px-sm-5 mx-50 pb-4 mt-2'>
                    <h1 className="f-Londrina">Update the images</h1>
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
                    <Col className="d-flex justify-content-end mt-2">
                        <button
                            onClick={updateImages}
                            className="btn btn-primary d-center">
                            {mainCatUpdateLoading ? <Spinner size={10}/> : "Update Images"}
                        </button>
                    </Col>
                </ModalBody>
            </Modal>
        </Row>
    }
}

export default MainServicePreviewView