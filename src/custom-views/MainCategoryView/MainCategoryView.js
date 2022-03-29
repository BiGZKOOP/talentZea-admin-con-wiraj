import {Card, Input} from "reactstrap"
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {getAllMainCatListen} from "./actions"
import CategoryViewCard from "../../custom-components/MainCategoryView/CategoryViewCard"
import {Search} from "react-feather"

const MainCategoryView = () => {

    const dispatch = useDispatch()
    const {mainCat} = useSelector(state => state.mainCatViewReducer)

    useEffect(() => {
        dispatch(getAllMainCatListen())
        console.log(mainCat)
    }, [])

    return <div>
        <Card className="w-100 shadow-lg p-2">
            <div className="w-25 d-flex">
                <Input placeholder="search category..."/>
                <button className="btn btn-outline-primary ml-2"><Search /></button>
            </div>
        </Card>
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