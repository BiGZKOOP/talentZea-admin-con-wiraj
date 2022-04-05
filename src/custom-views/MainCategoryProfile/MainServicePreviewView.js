// import MainNav from "../../custom-components/MainNav/MainNav"
import {Card, CardFooter, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row, Spinner} from "reactstrap"
import CreativeSvg from "../../assets/custom_images/svg/Creative.svg"
import "../../assets/css/serviceViews.css"
import "../../assets/css/dashboard.css"
// import OurWorkMainService from "../../custom-components/MainService/OurWorkMainService"
import ContactSVG from "../../assets/custom_images/svg/ContactSVG"
import {useDispatch, useSelector} from "react-redux"
import SuccessOrderSVG from "../../assets/custom_images/svg/SuccessOrderSVG"
import FriendlySvg from "../../assets/custom_images/svg/Friendly.svg"
import {useEffect, useState} from "react"
import {getMainServiceByIdListen, updateMainServiceByListen} from "./actions"
import MainNav from "../../custom-components/MainNav"
import BreakPointSwipper from "../../custom-components/swippers/BreakPointSwipper"
import Footer from "../../custom-components/footer/Footer"
import {Edit3} from "react-feather"
import ContactComp from "../../custom-components/contact-comp"

const MainServicePreviewView = () => {

    const dispatch = useDispatch()

    const pathname = window.location.pathname

    const id = pathname.split("/service/")[1]

    const [topicModelShow, setTopicModelShow] = useState(false)
    const [descriptionModelShow, setDescriptionModelShow] = useState(false)
    const [imagesModelShow, setImagesModelShow] = useState(false)

    const [topicUpdate, setTopicUpdate] = useState("")
    const [descriptionUpadte, setDescriptionUpdate] = useState("")


    // eslint-disable-next-line no-unused-vars
    const {mainCatPreview, mainCatPreviewLoading} = useSelector(state => state.mainCatPreviewReducer)

    useEffect(() => {
        dispatch(getMainServiceByIdListen(id))
    }, [])

    // eslint-disable-next-line no-unused-vars
    const validateSubService = () => {

        return mainCatPreview?.length > 0
    }

    const getImageArray = () => {

        if (validateSubService()) {
            return [mainCatPreview[0]?.mainService?.image?.image1, mainCatPreview[0]?.mainService?.image?.image2, mainCatPreview[0]?.mainService?.image?.image3]
        }
    }

    const cookObject = () => {
        return {
            ...mainCatPreview,
            mainTopic: topicUpdate,
            mainTopicDescription: descriptionUpadte
        }
    }

    const updateMainServiceByID = () => {

        dispatch(updateMainServiceByListen(cookObject()))
    }

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
                    mainCatPreview?.length > 0 ? `${mainCatPreview[0].mainService.mainTopic}` : "...."
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
                <p className="text-medium lead text-center">"{mainCatPreview[0]?.mainService?.mainTopicDescription}"</p>
            </Row>
        </Row>
        <Col className="mt-5">
            <Col className="text-center">
                <h1 className="f-Londrina font-large-2">OUR SERVICES</h1>
            </Col>
            <Row className="p-2 mt-3 radius-10  d-center flex-wrap d-flex">
                {
                    mainCatPreviewLoading && <div className="d-center flex-column animate__animated animate__bounce">
                        <Spinner className="text-primary mb-2"/>
                        <h1 className="text-primary">Loading...</h1>
                    </div>
                }
                {
                    !mainCatPreviewLoading && mainCatPreview?.map((e, index) => {
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
                <p className="f-Londrina text-topic text-center font-large-2">Some of our works...<Edit3
                    className="text-danger cursor-pointer clickable ml-2"
                    size={35}/></p>
            </div>
            <div>
                <BreakPointSwipper count={3} images={getImageArray()}/>
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
                    onClick={updateMainServiceByID}
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
               className='modal-dialog-centered modal-md'>
            <ModalHeader className='bg-primary' toggle={() => setImagesModelShow(!imagesModelShow)}/>
            <ModalBody className='px-sm-5 mx-50 pb-4 mt-2'>
            </ModalBody>
        </Modal>
    </Row>
}

export default MainServicePreviewView