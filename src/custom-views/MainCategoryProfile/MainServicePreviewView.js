// import MainNav from "../../custom-components/MainNav/MainNav"
import {Card, CardFooter, Col, Row, Spinner} from "reactstrap"
import CreativeSvg from "../../assets/custom_images/svg/Creative.svg"
import "../../assets/css/serviceViews.css"
import "../../assets/css/dashboard.css"
// import OurWorkMainService from "../../custom-components/MainService/OurWorkMainService"
import ContactSVG from "../../assets/custom_images/svg/ContactSVG"
import {useDispatch, useSelector} from "react-redux"
import SuccessOrderSVG from "../../assets/custom_images/svg/SuccessOrderSVG"
import FriendlySvg from "../../assets/custom_images/svg/Friendly.svg"
import {useEffect} from "react"
import {getMainServiceByIdListen} from "./actions"
import Footer from "../../@core/layouts/components/footer"
import MainNav from "../../custom-components/MainNav"

const MainServicePreviewView = () => {

    const dispatch = useDispatch()

    const pathname = window.location.pathname

    const id = pathname.split("/service/")[1]

    // eslint-disable-next-line no-unused-vars
    const {mainCatPreview, mainCatPreviewLoading} = useSelector(state => state.mainCatPreviewReducer)
    console.log(mainCatPreview)

    useEffect(() => {
        dispatch(getMainServiceByIdListen(id))
    }, [])

    // eslint-disable-next-line no-unused-vars
    const validateSubService = () => {

        return mainCatPreview.length > 0
    }
    
    // eslint-disable-next-line no-unused-vars
    const getImageArray = () => {

        if (validateSubService()) {
            const {image1, image2, image3} = subServices[0].mainService.image
            return [image1, image2, image3]
        }
    }


    return <Row>
        <div className="p-1 mb-5 mb-lg-0 w-100 sticky-top-custom">
            <MainNav index={2}/>
        </div>
        <div className="mt-4 mb-5 d-center flex-column">
            <div />
            <div className="main-img floating-img">
                <CreativeSvg/>
            </div>
            <h1 className="text-center mt-4 f-Londrina text-primary topic-header">{
                mainCatPreview ? mainCatPreview.mainTopic : "...."
            }</h1>
            <h2 className="f-indie-flower">We create memories here !</h2>
        </div>
        <Col className="mt-5">
            <Col className="text-center">
                <h1 className="f-Londrina font-large-2">OUR SERVICES</h1>
            </Col>
            <Row className="p-2 mt-3 radius-10  d-center flex-wrap d-flex">
                {
                    !mainCatPreviewLoading && <div className="d-center flex-column animate__animated animate__bounce">
                        <Spinner className="text-primary mb-2"/>
                        <h1 className="text-primary">Loading...</h1>
                    </div>
                }
                {/*{*/}
                {/*    mainCatPreviewLoading && mainCatPreview?.map((e, index) => {*/}
                {/*        return <Card key={index} className="dash-card m-2 scalable bg-semi-dark">*/}
                {/*            <div className="pt-2">*/}
                {/*                <h2 className="text-center f-Londrina">{e?.mainTopic}</h2>*/}
                {/*            </div>*/}
                {/*            <CardFooter>*/}
                {/*                <p>*/}
                {/*                    {e?.description}*/}
                {/*                </p>*/}
                {/*            </CardFooter>*/}
                {/*            <CardFooter className="d-center">*/}
                {/*                <button*/}
                {/*                    className="btn btn-outline-foursquare">*/}
                {/*                    SHOW ME...*/}
                {/*                </button>*/}
                {/*            </CardFooter>*/}
                {/*        </Card>*/}
                {/*    })*/}
                {/*}*/}
                <Card className="dash-card m-2 bg-instagram text-light rotatable bg-black">
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
                <p className="f-Londrina text-topic text-center">Some of our works...</p>
            </div>
            {/*<div>*/}
            {/*    <OurWorkMainService images={getImageArray()}/>*/}
            {/*</div>*/}
        </Row>
        {/*<ContactComp />*/}
        <Footer />
    </Row>
}

export default MainServicePreviewView