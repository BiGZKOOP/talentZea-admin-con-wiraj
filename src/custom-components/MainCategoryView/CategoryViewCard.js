import {Card, CardBody, CardFooter, CardHeader} from "reactstrap"
import BreakPointSwipper from "../swippers/BreakPointSwipper"

const CategoryViewCard = ({data}) => {

    const getImageArray = () => {

        if (data) {
            const {image1, image2, image3} = data.image
            return [image1, image2, image3]
        }
    }

    return <Card className="w-25 mr-2 scalable">
        <CardHeader>
            <h1 className="f-Londrina">{data.mainTopic}</h1>
        </CardHeader>
        <CardBody>
            <p>{data.mainTopicDescription}</p>
            <div>
                <BreakPointSwipper images={getImageArray()}/>
            </div>
        </CardBody>
        <CardFooter>
            <button className="btn btn-primary">update</button>
        </CardFooter>
    </Card>
}

export default CategoryViewCard