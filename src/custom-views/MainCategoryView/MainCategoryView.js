import {Card, Input, Spinner} from "reactstrap"
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {getAllMainCatListen} from "./actions"
import CategoryViewCard from "../../custom-components/MainCategoryView/CategoryViewCard"
import {Search} from "react-feather"

const MainCategoryView = () => {

    const dispatch = useDispatch()
    const {mainCat, mainCatLoading} = useSelector(state => state.mainCatViewReducer)

    useEffect(() => {
        dispatch(getAllMainCatListen())
    }, [])

    return <div>
        <Card className="w-100 shadow-lg p-2">
            <div className="w-25 d-flex">
                <Input placeholder="search category..."/>
                <button className="btn btn-outline-primary ml-2"><Search/></button>
            </div>
        </Card>
        {
            mainCatLoading && <div className="w-100 h-75-v d-center flex-column animate__animated animate__bounce">
                <Spinner className="mb-2"/>
                <p className="text-medium f-Londrina">Cooking your data...</p>
            </div>
        }
        <div className="d-flex justify-content-between flex-wrap">
            {
                mainCat?.map((data, index) => {
                    return <CategoryViewCard key={index} data={data}/>
                })
            }
        </div>
    </div>
}

export default MainCategoryView