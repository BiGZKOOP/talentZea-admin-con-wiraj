import {Spinner} from "reactstrap"

const CookLoader = () => {

    return <div
        className="w-100 h-100-v d-center flex-column animate__animated animate__bounce">
        <Spinner className="mb-2"/>
        <p className="text-medium f-Londrina">Cooking your data...</p>
    </div>
}

export default CookLoader