// ** Custom Hooks
import {Controller} from 'react-hook-form'

// ** Reactstrap Imports
import {Row, Col, Form, Input, Label, Alert, Button, CardText, CardTitle, UncontrolledTooltip} from 'reactstrap'

// ** Styles
import '@styles/react/pages/page-authentication.scss'
import InputPasswordToggle from "../../@core/components/input-password-toggle"

const SignUpView = () => {

    return (
        <div className='auth-wrapper auth-cover login-back'>
            <div className='auth-inner m-0 d-center'>
                <Col className='d-flex align-items-center shadow-lg bg-transparent login-inner radius-20 auth-bg px-2 p-5' lg='4' sm='2'>
                    <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
                        <CardTitle tag='h2' className='fw-bold mb-1 text-center text-dark f-Londrina'>
                            <h1>WELCOME TO THE TALENT ZEA SIGNUP</h1>
                        </CardTitle>
                        <CardText className='mb-2 text-center f-courgette'><h4>Creativity awaits...</h4></CardText>
                        <Form className='auth-login-form mt-2'>
                            <div className='mb-1 mt-5'>
                                <Label className='f-shippori' for='login-email'>
                                    <h6 className="p-0">Email</h6>
                                </Label>
                                <Input
                                    autoFocus
                                    type='email'
                                    placeholder='john@example.com'
                                />
                            </div>
                            <div className='mb-2'>
                                <div className='d-flex justify-content-between'>
                                    <Label className='f-shippori' for='login-password'>
                                        <h6 className="mt-1">Password</h6>
                                    </Label>
                                </div>
                                <InputPasswordToggle className='input-group-merge'/>
                            </div>
                            <div className="text-right f-Londrina mt-2 mb-1">
                                <h5 className="text-primary">forgot password ?</h5>
                            </div>
                            <Button type='submit' color='primary' block className="p-1 mt-2 mb-3">
                                Sign in
                            </Button>
                            <div className="text-center mt-2 mb-1 f-Londrina">
                                <h4>New to the talentZea ?
                                    <span className="text-primary p-0 pointer"> signup here.</span>
                                </h4>
                            </div>
                        </Form>
                    </Col>
                </Col>
            </div>
        </div>
    )
}

export default SignUpView
