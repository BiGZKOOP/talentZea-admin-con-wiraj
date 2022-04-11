import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {getAllSubCatListen} from "./action"
import {Card, Input, Spinner} from "reactstrap"
import {Search} from "react-feather"
import SubCatCard from "../../custom-components/SubCategory/SubCatCard"

const SubCategoryView = () => {

    const dispatch = useDispatch()

    const {subCat, subCatLoading} = useSelector(state => state.subCatReducer)

    useEffect(() => {
        dispatch(getAllSubCatListen())
    }, [])

    return <div>
        <Card className="w-100 shadow-lg p-2">
            <div className="w-25 d-flex">
                <Input placeholder="search category..."/>
                <button className="btn btn-outline-primary ml-2"><Search/></button>
            </div>
        </Card>
        {
            subCatLoading && <div className="w-100 h-75-v d-center flex-column animate__animated animate__bounce">
                <Spinner className="mb-2"/>
                <p className="text-medium f-Londrina">Cooking your data...</p>
            </div>
        }
        {
            !subCatLoading && <div className="d-flex justify-content-between flex-wrap">
                {
                    subCat?.map(data => {
                        return <SubCatCard data={data}/>
                    })
                }
            </div>
        }
    </div>

}
export default SubCategoryView