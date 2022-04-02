import {Button, Card, Col, Form, Input, Label, Row} from "reactstrap"
import {useFormik} from "formik"
import {useState} from "react"
import "../../assets/css/mainCategory.css"
import {PlusSquare, Upload} from "react-feather"

const MainCatCreate = () => {

    const [image1, setImage1] = useState()
    const [image2, setImage2] = useState()
    const [image3, setImage3] = useState()

    const formik = useFormik({
        initialValues: {
            mainTopic: "",
            mainTopicDescription: ""
        },
        onSubmit: 
    })

    const handleImage1 = () => {

        if (image1) {
            return <Label htmlFor="image1">
                <img width="350px"
                     src="https://cdn.vox-cdn.com/thumbor/mXo5ObKpTbHYi9YslBy6YhfedT4=/95x601:1280x1460/1200x800/filters:focal(538x858:742x1062)/cdn.vox-cdn.com/uploads/chorus_image/image/66699060/mgidarccontentnick.comc008fa9d_d.0.png"/>
            </Label>
        } else {
            return <Label htmlFor="image1">
                <div className="main-cat-upload-card d-center flex-column">
                    <Upload size={50}/>
                    <p className="text-small mt-1">Upload image 1</p>
                </div>
            </Label>
        }
    }

    const handleImage2 = () => {

        if (image2) {
            return <Label htmlFor="image2">
                <img width="350px"
                     src="https://cdn.vox-cdn.com/thumbor/mXo5ObKpTbHYi9YslBy6YhfedT4=/95x601:1280x1460/1200x800/filters:focal(538x858:742x1062)/cdn.vox-cdn.com/uploads/chorus_image/image/66699060/mgidarccontentnick.comc008fa9d_d.0.png"/>
            </Label>
        } else {
            return <Label htmlFor="image2">
                <div className="main-cat-upload-card d-center flex-column">
                    <Upload size={50}/>
                    <p className="text-small mt-1">Upload image 2</p>
                </div>
            </Label>
        }
    }

    const handleImage3 = () => {

        if (image3) {
            return <Label htmlFor="image3">
                <img width="350px"
                     src="https://cdn.vox-cdn.com/thumbor/mXo5ObKpTbHYi9YslBy6YhfedT4=/95x601:1280x1460/1200x800/filters:focal(538x858:742x1062)/cdn.vox-cdn.com/uploads/chorus_image/image/66699060/mgidarccontentnick.comc008fa9d_d.0.png"/>
            </Label>
        } else {
            return <Label htmlFor="image3">
                <div className="main-cat-upload-card d-center flex-column">
                    <Upload size={50}/>
                    <p className="text-small mt-1">Upload image 3</p>
                </div>
            </Label>
        }
    }

    return <Card className="p-1">
        <Form onSubmit={formik.handleSubmit}>
            <Col>
                <Label htmlFor="main" className="text-small mb-1">Main topic</Label>
                <Input
                    onChange={formik.handleChange}
                    value={formik.values.mainTopic}
                    placeholder="Enter main topic..."/>
            </Col>
            <Col className="mt-2">
                <Label htmlFor="main" className="text-small mb-1">Service description</Label>
                <Input
                    onChange={formik.handleChange}
                    value={formik.values.mainTopicDescription}
                    placeholder="Enter main topic..."/>
            </Col>
            <Col className="mt-5">
                <div className="d-flex justify-content-between">
                    <div>
                        {handleImage1()}
                        <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden/>
                    </div>
                    <div>
                        {handleImage2()}
                        <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden/>
                    </div>
                    <div>
                        {handleImage3()}
                        <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden/>
                    </div>
                </div>
            </Col>
            <Col className="d-flex justify-content-end mt-3 mb-2">
                <button type="submit" className="btn btn-primary">Create main service</button>
            </Col>
        </Form>
    </Card>
}

export default MainCatCreate