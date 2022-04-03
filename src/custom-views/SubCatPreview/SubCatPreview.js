import MainNav from "../../custom-components/MainNav/MainNav"
import CreativeSvg from "../../assets/custom_images/svg/Creative.svg"
import {Card, CardFooter, Col, Row} from "reactstrap"
import OurWorkMainService from "../../custom-components/MainService/OurWorkMainService"
import "../../assets/css/serviceViews.css"
import "../../assets/css/dashboard.css"
import SubServicePricing from "../../custom-components/SubServices/SubServicePricing"
import {useHistory} from "react-router-dom"
import SubServiceWelcomeSVG from "../../assets/custom_images/svg/SubServiceWelcomeSVG"
import FriendlySvg from "../../assets/custom_images/svg/Friendly.svg"
import {useSelector} from "react-redux"
import AirpodsSvg from "../../assets/custom_images/svg/Airpods.svg"
import Footer from "../../@core/layouts/components/footer"
import ContactComp from "../../custom-components/contact-comp"

const SubCatPreview = () => {

    const pathname = window.location.pathname

    const id = pathname.split("/sub-service/")[1]

    const {subServices} = useSelector(state => state.mainServiceReducer)

    // eslint-disable-next-line no-unused-vars
    const service = subServices[id]

    const history = useHistory()

    const validateSubService = () => {

        return subServices.length > 0
    }

    const getImageArray = () => {

        if (validateSubService()) {
            const {image1, image2, image3} = subServices[0].mainService.image
            return [image1, image2, image3]
        }
    }

    return <Row>
        <div className="p-1 mb-5  mb-lg-0">
            <MainNav index={2}/>
        </div>
        <div className="mt-4 mb-5 d-center flex-column">
            <div className="main-img floating-img">
                <SubServiceWelcomeSVG />
            </div>
            <h1 className="text-center mt-4 f-Londrina text-primary topic-header">{service?.mainTopic}</h1>
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
                <OurWorkMainService images={getImageArray()}/>
            </div>
        </Row>
        <div className="d-center">
            <AirpodsSvg />
        </div>
        <Row className="w-100 d-center mt-5 mb-5">
            <Row className="w-50 ">
                <p className="text-medium text-center">{service?.description}</p>
            </Row>
        </Row>
        <SubServicePricing faq={service?.faq}/>
        <ContactComp />
        <Footer />
    </Row>
}

export default SubCatPreview