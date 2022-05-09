import {Card, Input, Table} from "reactstrap"
import {Search} from "react-feather"
import {useHistory} from "react-router-dom"

const OrderView = () => {

    const history = useHistory()

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
                    <th scope="col" />
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>
                        <button
                            onClick={() => history.push("/order-details/1")}
                            className="btn btn-primary">More details</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </Card>
    </div>
}

export default OrderView