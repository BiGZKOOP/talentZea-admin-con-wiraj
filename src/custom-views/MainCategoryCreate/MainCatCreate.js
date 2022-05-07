import {useEffect} from "react"
import "../../assets/css/mainCategory.css"
import "../../assets/css/serviceViews.css"
import {useDispatch, useSelector} from "react-redux"
import CookLoader from "../../custom-components/CookingLoader"
import MainCatCreate from "../../custom-components/MainCategoryView/MainCatCreateComp"
import {getMainServiceByIdListen} from "../MainCategoryProfile/actions"

const MainCategoryCreate = () => {

    const pathname = window.location.pathname
    const id = pathname.split("/main-category/create/")[1]

    const dispatch = useDispatch()


    const {mainCatPreviewLoading} = useSelector(state => state.mainCatPreviewReducer)

    useEffect(() => {
        dispatch(getMainServiceByIdListen(id))
    }, [])

    if (id) {
        return (mainCatPreviewLoading) ? <CookLoader/> : <MainCatCreate />
    } else {
        return <MainCatCreate/>
    }
}

export default MainCategoryCreate
