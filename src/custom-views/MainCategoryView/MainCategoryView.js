import {Card} from "reactstrap"
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {getAllMainCatListen} from "./actions"
import CategoryViewCard from "../../custom-components/MainCategoryView/CategoryViewCard"

const MainCategoryView = () => {

    const dispatch = useDispatch()
    const {mainCat} = useSelector(state => state.mainCatViewReducer)

    useEffect(() => {
        dispatch(getAllMainCatListen())
        console.log(mainCat)
    }, [])

    return <div>
        <Card className="w-100 shadow-lg p-2">Sort & search</Card>
        <div className="d-flex flex-wrap">
            {
                mainCat?.map(data => {
                    return <CategoryViewCard data={data}/>
                })
            }
        </div>
    </div>
}

export default MainCategoryView