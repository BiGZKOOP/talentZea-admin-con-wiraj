import {Card, CardBody, CardFooter, CardHeader, Col, Row} from "reactstrap"
import ChartjsBarChart from "../../views/charts/chart-js/ChartjsBarChart"
import AirpodsSvg from "../../assets/custom_images/svg/Airpods.svg"
import {DollarSign} from "react-feather"

const Dashboard = () => {

    return (
        <Row>
            <Row>
                <Col lg={4} className="">
                    <Card>
                        <CardHeader className="f-Londrina font-large-1 text-warning">Pending orders</CardHeader>
                        <CardBody>
                            <p className="text-medium f-shippori text-warning">5 Orders</p>
                        </CardBody>
                        <CardFooter className="d-flex justify-content-end">
                            <button className="btn btn-warning">see all</button>
                        </CardFooter>
                    </Card>
                </Col>
                <Col lg={4} className="">
                    <Card>
                        <CardHeader className="f-Londrina font-large-1 text-success">Ongoing orders</CardHeader>
                        <CardBody>
                            <p className="text-medium f-shippori text-success">5 Orders</p>
                        </CardBody>
                        <CardFooter className="d-flex justify-content-end">
                            <button className="btn btn-success">see all</button>
                        </CardFooter>
                    </Card>
                </Col>
                <Col lg={4} className="">
                    <Card>
                        <CardHeader className="f-Londrina font-large-1 text-primary">Customer count</CardHeader>
                        <CardBody>
                            <p className="text-medium f-shippori text-primary">5 Orders</p>
                        </CardBody>
                        <CardFooter className="d-flex justify-content-end">
                            <button className="btn btn-primary">see all</button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <ChartjsBarChart/>
                </Col>
                <Col lg={6}>
                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardHeader className="text-large f-shippori">
                                    <div className="d-flex align-items-center text-danger">
                                        This month revenue
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <p className="text-medium text-danger">Rs. 170,000 /=</p>
                                </CardBody>
                                <CardFooter className="d-flex justify-content-end">
                                    <button className="btn btn-foursquare">Show details</button>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <CardHeader className="text-large f-shippori">
                                    <div className="d-flex align-items-center">
                                        Last month revenue
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <p className="text-medium">Rs. 170,000 /=</p>
                                </CardBody>
                                <CardFooter className="d-flex justify-content-end">
                                    <button className="btn btn-primary">Show details</button>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader className="text-large f-shippori">
                                    <div className="d-flex align-items-center">
                                        This is month hot service
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col lg={6}>
                                            <p className="text-medium">Graphics designing !!!</p>
                                        </Col>
                                        <Col lg={6} className="d-flex justify-content-end">
                                            <button className="btn btn-success d-center">Show service</button>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Row>
    )
}

export default Dashboard