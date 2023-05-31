import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FaGoogle,FaGithub } from 'react-icons/fa';


const Login = () => {
    
    const handleSubmit = event => {
        event.preventDefault();
    }
    return (
        <div>
            <div className='my-5 d-flex justify-content-center'>
            <Form className='w-75' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
            <Form.Text className="text-danger">
               
            </Form.Text>
        </Form>
        </div>
        <div className='mb-5'>
            <h6>Login With </h6>
             <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle>  Login with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>

        </div>
        </div>
    );
};

export default Login;