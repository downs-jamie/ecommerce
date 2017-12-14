import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, Col, MenuItem} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import LoginAction from '../actions/LoginAction';
import { connect } from 'react-redux';



class Login extends Component{
    constructor(){
        super();
        this.state = {

        }
        this.handleSubmit - this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        console.log("handleSubmit running")
        const email = event.target[0].value
        const password = event.target[1].value
        const formData = {
            email: email,
            password: password
        }

    }
    render(){
        return(
            <div className="top1">
                <div className="register-wrapper">
                    <h1 className="text-danger">{this.state.registerMessage}</h1>
                    <Form horizontal onSubmit={this.handleSubmit}>
                        <FormGroup controlId="formHorizontalName" validationState={this.state.nameError}>
                            <Col componentClass={ControlLabel} sm={2}>
                                Email
                            </Col>
                            <Col sm={10}>
                                <FormControl type="email" name="email" placeholder="Email" />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalName" validationState={this.state.emailError}>
                            <Col componentClass={ControlLabel} sm={2}>
                                Password
                            </Col>
                            <Col sm={10}>
                                <FormControl type="password" name="password" placeholder="Password" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <Button className="loginBtn" type="submit">
                                    Login
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        loginAction: LoginAction
    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);

