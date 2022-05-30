import {Form, Input, Label, Row} from "reactstrap"
import dForm from "./dForm"

const DynamicForms = () => {

    const submitForm = (e) => {
        e.preventDefault()

        const data = []

        dForm.map(e => {
            const formData = document.getElementById(e.id).value
            data.push({
                key: e.id,
                value: formData
            })
        })
        console.log(data)
    }

    return <div>
        <Form onSubmit={submitForm}>
            {
                dForm.map((e, index) => {
                   return <Row key={index}>
                        <Label>{e.label}</Label>
                       <Input
                           type={e.type} id={e.id} name={e.name}/>
                    </Row>
                })
            }
            <Row>
                <button className="btn btn-danger">SUBMTI</button>
            </Row>
        </Form>
    </div>
}

export default DynamicForms