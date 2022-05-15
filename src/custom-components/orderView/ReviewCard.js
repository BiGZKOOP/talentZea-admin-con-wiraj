import {Card, CardBody, CardHeader} from "reactstrap"
import Avatar from "../../@core/components/avatar"

const ReviewCard = () => {

    return <Card className="mr-2 scalable" style={{width: "48%"}}>
        <CardHeader>
            <div className="d-flex">
                <div>
                    <Avatar
                        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeriYGQjOOecu23m2gqPoc1_Dz5Phrr4uKWwNMnwyQxUYDgCUqOHiwv0Jph1MU5Kzf0g&usqp=CAU"
                        imgHeight={38} imgWidth={38}/>
                </div>
                <div className="ml-2 font-bold">
                    <p className="m-0 p-0">Udara J</p>
                    <p className="m-0 p-0">2022/02/12</p>
                </div>
            </div>
        </CardHeader>
        <hr/>
        <CardBody>
            <h4>Amazing work !!!</h4>
        </CardBody>
    </Card>
}

export default ReviewCard