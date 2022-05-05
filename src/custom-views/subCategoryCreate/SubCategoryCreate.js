import {useEffect} from "react"
import "../../assets/css/mainCategory.css"
import "../../assets/css/serviceViews.css"
import {useDispatch, useSelector} from "react-redux"
import {getAllMainCatListen} from "../MainCategoryView/actions"
// eslint-disable-next-line no-unused-vars
import {getSubServiceByIDListen} from "../SubCategoryView/action"
import CookLoader from "../../custom-components/CookingLoader"
import SubCatCreateComp from "../../custom-components/SubCategory/SubCatCreateComp"

const SubCategoryCreate = () => {

    const pathname = window.location.pathname
    const id = pathname.split("/sub-category/create/")[1]

    const dispatch = useDispatch()

    const {singleSubCatLoading} = useSelector(state => state.subCatReducer)

    useEffect(() => {
        dispatch(getSubServiceByIDListen(id))
        dispatch(getAllMainCatListen())
    }, [])

    if (id) {
        return (singleSubCatLoading) ? <CookLoader/> : <SubCatCreateComp />
    } else {
        return <SubCatCreateComp/>
    }
}

export default SubCategoryCreate