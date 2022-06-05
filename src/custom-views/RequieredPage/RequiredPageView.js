import {Button, Card, CardBody, CardHeader, Col, Form, Input, Label, Row} from "reactstrap"
import {useFormik} from "formik"
import {fireAlertError} from "../../utility/customUtils"
import {useEffect, useState} from "react"
import {NUMBER, TEXT, TEXT_AREA} from "./consts"
import {ArrowDownCircle, ArrowUpCircle, Trash2} from "react-feather"
import {useDispatch} from "react-redux"
import {createRequiredPageListen} from "./actions"
import Swal from "sweetalert2"
import {getSubServiceByIDListen} from "../SubCategoryView/action"

const RequiredPageView = () => {

    const [type, setType] = useState(0)

    const [formArr, setFromArr] = useState([])

    const dispatch = useDispatch()

    const pathname = window.location.pathname

    const id = pathname.split("/sub-service/required-page/")[1]

    const validate = (values) => {

        if (!values.label) {
            fireAlertError("Hmm...", "You must add a label")
            return
        }

        if (values.label.toString().toLowerCase().length < 3) {
            fireAlertError("Hmm...", "Label must contains at least 3 letters")
            return
        }

        if (type === 0) {
            fireAlertError("Hmm...", "You must select a input type")
            return
        }

        if (!values.id) {
            fireAlertError("Hmm...", "You must add a id/name")
            return
        }

        setFromArr(formArr.concat({
            ...values,
            type
        }))
        // eslint-disable-next-line no-use-before-define
        cleanForm()
    }

    const createRequiredPage = () => {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to update this after created !",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Add the page !'
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(createRequiredPageListen(formArr, id))
                }
            })
    }

    const formik = useFormik({
        initialValues: {
            label: "",
            placeholder: "",
            description: "",
            id: ""
        },
        onSubmit: values => {
            validate(values)
        }
    })

    const cleanForm = () => {
        formik.values.label = ""
        formik.values.special = ""
        formik.values.placeholder = ""
        formik.values.description = ""
        formik.values.id = ""
        setType(0)
    }

    const removeFields = (e, index) => {
        const tempArr = formArr
        tempArr.splice(index, 1)
        setFromArr(tempArr)
        setFromArr(formArr.concat())
    }

    const swapElements = (index, upward) => {
        const tempArr = formArr
        let nextIndex
        const cur = tempArr[index]

        if (upward) nextIndex = index - 1
        else nextIndex = index + 1

        const next = tempArr[nextIndex]

        tempArr[index] = next
        tempArr[nextIndex] = cur

        console.log(next)

        setFromArr(tempArr)
        setFromArr(formArr.concat())
    }

    useEffect(() => {
        dispatch(getSubServiceByIDListen(id))
    }, [])

    return <div className="p-0">
        <Card>
            <CardHeader className="bg-gradient-primary m-0">
                <h1 className="f-Staatliches font-large-1 text-light p-0 m-0">Required page</h1>
            </CardHeader>
            <CardBody className="pt-2">
                <Form onSubmit={formik.handleSubmit}>
                    <Col lg={3}>
                        <Label htmlfor="id" className="f-Staatliches text-medium mb-1">Enter ID</Label>
                        <Input
                            id="id"
                            name="id"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.id}
                            placeholder="ID here"/>
                        <p className="mt-1 f-courgette text-danger">*. Every ID must be unique for each input field</p>
                    </Col>
                    <Col lg={12} className="mt-3">
                        <Label className="f-Staatliches text-medium mb-1">Enter label</Label>
                        <Input
                            htmlFor="label"
                            id="label"
                            name="label"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.label}
                            placeholder="Label here..."/>
                    </Col>
                    <Col lg={12} className="mt-3">
                        <Label className="f-Staatliches text-medium mb-1">Enter placeholder</Label>
                        <Input
                            htmlFor="placeholder"
                            id="placeholder"
                            name="placeholder"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.placeholder}
                            placeholder="placeholder here..."/>
                    </Col>
                    <Col lg={12} className="mt-3">
                        <Label className="f-Staatliches text-medium mb-1">Enter description</Label>
                        <Input
                            type="textarea"
                            htmlFor="description"
                            id="description"
                            name="description"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.description}
                            placeholder="description here..."/>
                    </Col>
                    <Col className="mt-3">
                        <Label className="f-Staatliches text-medium mb-1">Input type</Label>
                        <div className="d-flex">
                            <div
                                onClick={() => setType(TEXT)}
                                className={`btn ${type === TEXT ? "btn-primary" : "btn-outline-primary"} mr-5 text-extra-small`}>TEXT</div>
                            <div
                                onClick={() => setType(NUMBER)}
                                className={`btn ${type === NUMBER ? "btn-success" : "btn-outline-success"} mr-5 text-extra-small`}>NUMBER</div>
                            <div
                                onClick={() => setType(TEXT_AREA)}
                                className={`btn ${type === TEXT_AREA ? "btn-danger" : "btn-outline-danger"} mr-5 text-extra-small`}>TEXT AREA</div>
                        </div>
                    </Col>
                    <Col className="mt-3 d-flex justify-content-end">
                        <button type="submit" className="btn-gradient-success btn font-large-1 f-Staatliches">add field</button>
                    </Col>
                </Form>
            </CardBody>
        </Card>
        <Card className="mt-5 p-0 m-0">
            <CardHeader className="bg-gradient-success m-0">
                <h1 className="f-Staatliches font-large-1 text-light p-0 m-0">Preview</h1>
            </CardHeader>
            <CardBody>
                {
                    formArr.map((e, index) => {
                        return <div>
                            <Col key={index} lg={12} className="mt-3">
                                <Label
                                    htmlFor={e.id}
                                    className="f-Staatliches text-medium mb-1">{e.label}</Label>
                                <div className="d-center">
                                    <Input
                                        type={e.type}
                                        id={e.id}
                                        name={e.id}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder={e.placeholder}/>
                                    <div className="d-flex">
                                       <div>
                                           <button
                                               onClick={() => { removeFields(e, index) }}
                                               className="btn btn-foursquare ml-2"><Trash2 size={21} className="m-0 p-0"/></button>
                                       </div>
                                        <div>
                                            <button
                                                hidden={index === 0}
                                                onClick={() => { swapElements(index, true) }}
                                                className="btn btn-primary ml-2"><ArrowUpCircle size={19} className="m-0 p-0"/></button>
                                        </div>
                                        <div>
                                            <button
                                                hidden={index === formArr.length - 1}
                                                onClick={() => { swapElements(index, false) }}
                                                className="btn btn-instagram ml-2"><ArrowDownCircle size={20} className="m-0 p-0"/></button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <p className="mt-1">*.{e.description}</p>
                        </div>
                    })
                }
            </CardBody>
        </Card>
        <div className="mt-3 d-flex justify-content-end">
            <button
                onClick={createRequiredPage}
                className="btn btn-gradient-primary f-Staatliches font-large-1">ADD THE REQUIRED PAGE</button>
        </div>
    </div>
}

export default RequiredPageView