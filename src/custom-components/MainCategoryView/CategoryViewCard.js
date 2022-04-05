import {Card, CardBody, CardFooter, CardHeader} from "reactstrap"
import BreakPointSwipper from "../swippers/BreakPointSwipper"
import {Edit, Eye} from "react-feather"
import {useHistory} from "react-router-dom"

const CategoryViewCard = ({data}) => {

    const history = useHistory()

    const getImageArray = () => {
        if (data) {
            return [data?.image?.image1, data?.image?.image2, data?.image?.image3]
        }
    }

    return <Card className="w-25 mr-2 scalable">
        <CardHeader>
            <h1 className="f-Londrina">{data.mainTopic}</h1>
        </CardHeader>
        <CardBody>
            <p>{data.mainTopicDescription}</p>
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

export default CategoryViewCard