import {Badge, Card, Input, Table} from "reactstrap"
import {Search} from "react-feather"
import {useHistory} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react"
import {getAllOrdersListen} from "./actions"
import moment from "moment"
import CookLoader from "../../custom-components/CookingLoader"

const OrderView = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const {allOrder, allOrderLoader} = useSelector(state => state.orderReducer)

    const handleOrderStateBadge = (state) => {
        switch (state) {
            case 0:
                return <Badge color='light-warning' pill>
                    Pending
                </Badge>
            case 1:
                return <Badge color='light-primary' pill>
                    On going
                </Badge>
            case 2:
                return <Badge color='light-success' pill>
                    Completed
                </Badge>
            default:
                break
        }
    }

    useEffect(() => {
        if (!allOrderLoader.length > 0) dispatch(getAllOrdersListen())
    }, [])

    if (!allOrderLoader) {
        return <div>
            <Card className="w-100 shadow-lg p-2">
                <div className="w-25 d-flex">
                    <Input placeholder="search category..."/>
                    <button className="btn btn-outline-primary ml-2"><Search/></button>
                </div>
            </Card>
            <Card className="mt-2 overflow-auto">
                <table className="table table-hover ">
                    <thead>
                    <tr>
                        <th scope="col">Order ID</th>
                        <th scope="col">Order Date</th>
                        <th scope="col">Service</th>
                        <th scope="col">Customer name</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Status</th>
                        <th scope="col"/>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        allOrder.map(e => {
                            return <tr>
                                <th scope="row">{e?._id}</th>
                                <td>{moment(e?.createdAt).format("MMM Do YY")}</td>
                                <td>{e?.subServiceID?.mainTopic}</td>
                                <td>{e?.customerID?.name}</td>
                                <td>$ {e?.amount}</td>
                                <td>
                                    {handleOrderStateBadge(e?.orderStatus)}
                                </td>
                                <td>
                                    <button
                                        onClick={() => history.push("/order-details/1")}
                                        className="btn btn-primary">More details
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </Card>
        </div>
    } else {
        return <CookLoader/>
    }
}

export default OrderView