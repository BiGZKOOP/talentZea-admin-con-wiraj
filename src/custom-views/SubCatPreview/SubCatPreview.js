import CreativeSvg from "../../assets/custom_images/svg/Creative.svg"
import {Card, CardFooter, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row, Spinner} from "reactstrap"
import "../../assets/css/serviceViews.css"
import "../../assets/css/dashboard.css"
import {useHistory} from "react-router-dom"
import SubServiceWelcomeSVG from "../../assets/custom_images/svg/SubServiceWelcomeSVG"
import FriendlySvg from "../../assets/custom_images/svg/Friendly.svg"
import {useDispatch, useSelector} from "react-redux"
import AirpodsSvg from "../../assets/custom_images/svg/Airpods.svg"
import ContactComp from "../../custom-components/contact-comp"
import MainNav from "../../custom-components/MainNav"
import BreakPointSwipper from "../../custom-components/swippers/BreakPointSwipper"
import SubServicePricing from "./SubServicePricing"
import {useEffect, useState} from "react"
import {getSubServiceByIDListen} from "../SubCategoryView/action"
import Footer from "../../custom-components/footer/Footer"
import {Edit3, Upload} from "react-feather"
import {fireAlertError} from "../../utility/customUtils"

const SubCatPreview = () => {

    const pathname = window.location.pathname

    const id = pathname.split("/sub-category/preview/")[1]

    const {singleSubCat, singleSubCatLoading} = useSelector(state => state.subCatReducer)

    const [topicModelShow, setTopicModelShow] = useState(false)
    const [descriptionModelShow, setDescriptionModelShow] = useState(false)
    const [imagesModelShow, setImagesModelShow] = useState(false)

    // eslint-disable-next-line no-unused-vars
    const [image1, setImage1] = useState()
    const [image2, setImage2] = useState()
    const [image3, setImage3] = useState()

    const [topicUpdate, setTopicUpdate] = useState("")
    const [descriptionUpadte, setDescriptionUpdate] = useState("")

    const dispatch = useDispatch()

    const history = useHistory()

    const updateTopic = () => {

        if (topicUpdate.length > 5) {
            // updateMainServiceByID({
            //     ...mainCatPreview[0],
            //     mainTopic: topicUpdate
            // })
        } else fireAlertError("Oops...", "Your topic must contains at least 5 letter")
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

    const getImageArray = () => {

        return [singleSubCat?.image?.image1, singleSubCat?.image?.image2, singleSubCat?.image?.image3]
    }

    console.log(singleSubCatLoading)

    useEffect(() => {
        dispatch(getSubServiceByIDListen(id))
    }, [])

    if (singleSubCatLoading) return <div className="w-100 h-100-v d-center flex-column animate__animated animate__bounce">
            <Spinner className="mb-2"/>
            <p className="text-medium f-Londrina">Cooking your data...</p>
        </div>
    else {
        return <Row>
            <div className="p-1 mb-5  mb-lg-0">
                <MainNav index={2}/>
            </div>
            <div className="mt-4 mb-5 d-center flex-column">
                <div className="main-img floating-img">
                    <SubServiceWelcomeSVG/>
                </div>
                <h1 className="text-center mt-4 f-Londrina text-primary topic-header">
                    {singleSubCat?.mainTopic}
                    <Edit3
                        onClick={() => setTopicModelShow(!topicModelShow)}
                        size={45} className="ml-2 text-danger clickable cursor-pointer"/>
                </h1>
                <h2 className="f-indie-flower">We create memories here !</h2>
                <div className="d-flex">
                    <button className="btn btn-danger text-medium mt-2 mr-2">PLACE ORDER</button>
                    <button
                        onClick={() => history.goBack()}
                        className="btn btn-outline-primary text-medium mt-2">BACK TO SERVICES
                    </button>
                </div>
            </div>
            <Row className="w-100 d-center mt-5">
                <Row className="w-50 ">
                    <h1 className="text-center mb-3 f-Londrina">
                        What we provide
                        <Edit3
                            onClick={() => setTopicModelShow(!topicModelShow)}
                            size={30} className="ml-2 text-danger clickable cursor-pointer"/>
                    </h1>
                    <p className="text-medium text-center">{singleSubCat?.description}</p>
                </Row>
            </Row>
            <Row className="mt-5 d-center">
                <div className="mt-5 mb-3">
                    <h1 className="f-Londrina text-topic text-center">Some of our works... <Edit3
                        onClick={() => setImagesModelShow(!imagesModelShow)}
                        size={30} className="ml-2 text-danger clickable cursor-pointer"/></h1>
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
            {/*<SubServicePricing faq={singleSubCat?.faq}/>*/}
            <ContactComp/>
            <Footer/>

            {/*Topic update model*/}
            <Modal isOpen={topicModelShow} toggle={() => setTopicModelShow(!topicModelShow)}
                   className='modal-dialog-centered modal-md'>
                <ModalHeader className='bg-primary' toggle={() => setTopicModelShow(!topicModelShow)}>
                    <h3 className="text-light">Real time update</h3>
                </ModalHeader>
                <ModalBody className='px-sm-5 mx-50 pb-4 mt-2'>
                    <Label htmlFor="topicId" className="text-medium lead mb-1">Update the description</Label>
                    <Input type="textarea" id="topicId" placeholder="Service topic here..." value={topicUpdate}
                           onChange={e => setTopicUpdate(e.target.value)}/>
                </ModalBody>
                <ModalFooter>
                    <button
                        onClick={updateTopic}
                        className="btn btn-primary">Update
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
                    <Input id="topicId" placeholder="Service description here..." value={descriptionUpadte}
                           onChange={e => setDescriptionUpdate(e.target.value)}/>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary">Update</button>
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
                        <button className="btn btn-primary">Update images</button>
                    </Col>
                </ModalBody>
            </Modal>
        </Row>
    }
}

export default SubCatPreview