import FriendlySvg from "../assets/custom_images/svg/Friendly.svg"
import {Row} from "reactstrap"

const ContactComp = () => {

    return <Row className=" d-center mt-5 mb-5">
        <div className="d-center main-img mb-2 floating-img">
            <FriendlySvg/>
        </div>
        <div className="mb-2 mt-1">
            <h1 className="text-center f-Londrina text-contact">Feel free to contact us for any question you
                have !</h1>
        </div>
        <div className="d-center">
            <button className="btn btn-foursquare" >Contact Us</button>
        </div>
    </Row>
}

export default ContactComp