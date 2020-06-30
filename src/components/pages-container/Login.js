import React from 'react';
import './Login.css';
import { Form, Button } from 'react-bootstrap';
import Slide from 'react-reveal';

function Login() {
        return (
            <div className="login">
                <h1>Account</h1>
                <Slide left cascade>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
    </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
  </Button>
                    </Form>
                </Slide>
            </div>

        )
    }

export default Login;



