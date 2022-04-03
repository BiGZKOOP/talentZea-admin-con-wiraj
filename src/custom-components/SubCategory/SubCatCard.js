import {Card, CardBody, CardFooter, CardHeader} from "reactstrap"
import BreakPointSwipper from "../swippers/BreakPointSwipper"
import {Edit, Eye} from "react-feather"
import {useHistory} from "react-router-dom"

const SubCatCard = ({data}) => {

    const history = useHistory()

    const getImageArray = () => {

        if (data) {
            const {image1, image2, image3} = data.image
            return [image1, image2, image3]
        }
    }


    return <Card className="w-25 mr-2 scalable">
        <CardHeader>
            <h4 className="f-Londrina"><span className="text-primary">{data.mainService.mainTopic}</span> {"> "}
                <span className="text-danger">{data.mainTopic}</span></h4>
        </CardHeader>
        <CardBody>
            <p>{data.description}</p>
            <div>
                <BreakPointSwipper count={1} images={getImageArray()}/>
            </div>
        </CardBody>
        <CardFooter className="d-flex justify-content-end">
            <button className="btn btn-primary mr-2 d-center"><Edit size={15} className="mr-1"/> Edit</button>
            <button
                onClick={() => history.push(`/service/${data._id}`)}
                className="btn btn-outline-success"><Eye size={15}/></button>
        </CardFooter>
    </Card>
}

export default SubCatCard