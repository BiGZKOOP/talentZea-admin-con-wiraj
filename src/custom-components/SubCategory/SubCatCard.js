import {Card, CardBody, CardFooter, CardHeader} from "reactstrap"
import BreakPointSwipper from "../swippers/BreakPointSwipper"
import {Delete, Edit, Eye} from "react-feather"
import {useHistory} from "react-router-dom"

const SubCatCard = ({data}) => {

    const history = useHistory()

    const getImageArray = () => {

        if (data?.image) {
            const {image1, image2, image3} = data?.image
            return [image1, image2, image3]
        }
    }


    return <Card className="mr-2 scalable" style={{width: "31%"}}>
        <CardHeader>
            <h4 className="f-Londrina"><span className="text-primary">{data?.mainService?.mainTopic}</span> {"> "}
                <span className="text-danger">{data?.mainTopic}</span></h4>
        </CardHeader>
        <CardBody>
            <p>{data?.description}</p>
            <div>
                <BreakPointSwipper count={1} images={getImageArray()}/>
            </div>
        </CardBody>
        <CardFooter className="d-flex justify-content-end">
            <button
                onClick={() => history.push(`/sub-category/create/${data?._id}`)}
                className="btn btn-primary mr-2 d-center"><Edit size={15} className="mr-1"/> Edit</button>
            <button
                onClick={() => history.push(`/sub-category/preview/${data?._id}`)}
                className="btn btn-gradient-danger"><Delete size={15}/></button>
        </CardFooter>
    </Card>
}

export default SubCatCard