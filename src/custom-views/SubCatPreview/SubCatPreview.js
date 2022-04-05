import CreativeSvg from "../../assets/custom_images/svg/Creative.svg"
import {Card, CardFooter, Col, Row} from "reactstrap"
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
import {useEffect} from "react"
import {getSubServiceByIDListen} from "../SubCategoryView/action"
import Footer from "../../custom-components/footer/Footer"

const SubCatPreview = () => {

    const pathname = window.location.pathname

    const id = pathname.split("/sub-category/preview/")[1]

    const {singleSubCat} = useSelector(state => state.subCatReducer)

    const dispatch = useDispatch()

    const history = useHistory()

    const validateSubService = () => {

        return singleSubCat.length > 0
    }

    const getImageArray = () => {

        if (validateSubService()) {
            const {image1, image2, image3} = singleSubCat?.mainService?.image
            return [image1, image2, image3]
        }
    }
    
    useEffect(() => {
        dispatch(getSubServiceByIDListen(id))
    }, [])

    return <Row>
        <div className="p-1 mb-5  mb-lg-0">
            <MainNav index={2}/>
        </div>
        <div className="mt-4 mb-5 d-center flex-column">
            <div className="main-img floating-img">
                <SubServiceWelcomeSVG />
            </div>
            <h1 className="text-center mt-4 f-Londrina text-primary topic-header">{singleSubCat?.mainTopic}</h1>
            <h2 className="f-indie-flower">We create memories here !</h2>
            <div className="d-flex">
                <button className="btn btn-danger text-medium mt-2 mr-2">PLACE ORDER</button>
                <button
                    onClick={() => history.goBack()}
                    className="btn btn-outline-primary text-medium mt-2">BACK TO SERVICES</button>
            </div>
        </div>
        <Row className="mt-5 d-center">
            <div className="mt-5 mb-3">
                <p className="f-Londrina text-topic text-center">Some of our works...</p>
            </div>
            <div>
                <BreakPointSwipper count={3} images={getImageArray()}/>
            </div>
        </Row>
        <div className="d-center">
            <AirpodsSvg />
        </div>
        <Row className="w-100 d-center mt-5 mb-5">
            <Row className="w-50 ">
                <p className="text-medium text-center">{singleSubCat?.description}</p>
            </Row>
        </Row>
        <SubServicePricing faq={singleSubCat?.faq}/>
        <ContactComp />
        <Footer />
    </Row>
}

export default SubCatPreview