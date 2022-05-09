import {Card, CardBody, CardHeader, Col, Row} from "reactstrap"
import {Clock} from "react-feather"
import Timeline from "../../@core/components/timeline"
import {time_linedata} from "./consts"
import Avatar from "../../@core/components/avatar"

const OrderDetailsView = () => {

    const handleStatusPointer = (num) => {
        switch (num) {
            case 0:
                return "warning"
            case 1:
                return "info"
            case 2:
                return "success"
            case -1:
                return "danger"
            default:
                return "dark"
        }
    }

    return <div>
        <Card>
            <CardHeader className="d-flex justify-content-between">
                <div>
                    <h1 className="f-Staatliches font-large-1"><span
                        className="text-danger">Graphics designing</span> {">"} <span className="text-primary">LOGO designing</span></h1>
                    <p className="text-grey mt-1">Created at:- 2022/02/02</p>
                    <p className="text-grey"> 12 days delivery</p>
                </div>
                <div className="mr-1">
                    <h1 className="font-bold">$ 120.00 /=</h1>
                </div>
            </CardHeader>
            <hr />
            <CardBody>
                <h1 className="f-courgette">Pricing & Features</h1>
                <div className="w-25">
                    <ol className="f-courgette mt-2">
                        <li className="text-medium mb-1">
                            <div className="w-100 d-flex justify-content-between text-primary">
                                <div>
                                    Base price
                                </div>
                                <div>
                                    $ 12.00 /=
                                </div>
                            </div>
                        </li>
                        <li className="text-medium mb-1">
                            <div className="w-100 d-flex justify-content-between">
                                <div>
                                    Revisions:- 7
                                </div>
                                <div>
                                    $ 12.00 /=
                                </div>
                            </div>
                        </li>
                        <li className="text-medium mb-1">
                            <div className="w-100 d-flex justify-content-between">
                                <div>
                                    Source files included
                                </div>
                                <div>
                                    $ 20.00 /=
                                </div>
                            </div>
                        </li>
                        <li className="text-medium">
                            <div className="w-100 d-flex justify-content-between">
                                <div>
                                    Express delivery - <span className="text-danger">7days</span>
                                </div>
                                <div>
                                    $ 12.00 /=
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            </CardBody>
        </Card>
        <Row>
            <Col sm={12} lg={7}>
                <div className="mb-2">
                    <h3>Order Timeline</h3>
                </div>
                <Card className="mb-5 p-2 bg-semi-dark">
                    <Timeline data={time_linedata}/>
                </Card>
            </Col>
            <Col lg={5}>
                <div className="d-center h-100">
                    <Card className="d-flex flex-column d-center p-5">
                        <div className="d-flex flex-row align-items-baseline">
                            <div className={`bg-${handleStatusPointer(1)} full-round mr-1 p-0`} style={{width: "15px", height:"15px"}}/>
                            <h1 className={`text-${handleStatusPointer(1)}`}>Pending</h1>
                        </div>
                        <div className="mt-2">
                            <button className="btn btn-danger">NEXT STATE</button>
                        </div>
                    </Card>
                </div>
            </Col>
        </Row>
        <Row>
            <div className="p-1">
                <h1 className="font-large-1 f-Staatliches p-0">What customer think about the order ?</h1>
            </div>
            <div className="w-100 d-flex flex-wrap">
                <Card className="mr-2" style={{width: "48%"}}>
                    <CardHeader>
                        <div className="d-flex">
                            <div>
                                <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeriYGQjOOecu23m2gqPoc1_Dz5Phrr4uKWwNMnwyQxUYDgCUqOHiwv0Jph1MU5Kzf0g&usqp=CAU" imgHeight={38} imgWidth={38} />
                            </div>
                            <div className="ml-2 font-bold">
                                <p className="m-0 p-0">Udara J</p>
                                <p className="m-0 p-0">2022/02/12</p>
                            </div>
                        </div>
                    </CardHeader>
                    <hr />
                    <CardBody>
                        <h4>Amazing work !!!</h4>
                    </CardBody>
                </Card>
                <Card className="mr-2" style={{width: "48%"}}>
                    <CardHeader>
                        <div className="d-flex">
                            <div>
                                <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeriYGQjOOecu23m2gqPoc1_Dz5Phrr4uKWwNMnwyQxUYDgCUqOHiwv0Jph1MU5Kzf0g&usqp=CAU" imgHeight={38} imgWidth={38} />
                            </div>
                            <div className="ml-2 font-bold">
                                <p className="m-0 p-0">Udara J</p>
                                <p className="m-0 p-0">2022/02/12</p>
                            </div>
                        </div>
                    </CardHeader>
                    <hr />
                    <CardBody>
                        <h4>Amazing work !!!</h4>
                    </CardBody>
                </Card>
            </div>
        </Row>
    </div>
}

export default OrderDetailsView