import {Card, CardBody, CardFooter, CardHeader, Spinner} from "reactstrap"
import BreakPointSwipper from "../swippers/BreakPointSwipper"
import {Delete, Edit, Eye} from "react-feather"
import {useHistory} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {deleteMainServiceListen} from "../../custom-views/MainCategoryView/actions"
import {fireAlertError} from "../../utility/customUtils"

const CategoryViewCard = ({data}) => {

    const history = useHistory()

    const dispatch = useDispatch()

    const {mainCatDeleteLoading} = useSelector(state => state.mainCatViewReducer)

    const getImageArray = () => {
        if (data) {
            return [data?.image?.image1, data?.image?.image2, data?.image?.image3]
        }
    }

    const deleteMainCat = () => {
        if (!mainCatDeleteLoading) dispatch(deleteMainServiceListen(data._id))
        else fireAlertError("Still loading...", "Your previous request is still pending !!!")
    }

    return <Card className="mr-2 scalable" style={{width: "30%"}}>
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
            <button
                onClick={() => history.push(`/main-category/create/${data?._id}`)}
                className="btn btn-primary mr-2 d-center"><Edit size={15} className="mr-1"/> Edit
            </button>
            <button
                onClick={deleteMainCat}
                className="btn btn-gradient-danger">
                <Delete size={15}/>
            </button>
        </CardFooter>
    </Card>
}

export default CategoryViewCard