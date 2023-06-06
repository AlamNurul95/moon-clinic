import React, { useContext } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FaGoogle,FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";


const Login = () => {
    
    const {signIn,providerLogin}=useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    
    const handleSubmit = event => {
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        signIn(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        .catch(error=>{
            console.error(error);
        })
    }
    const handleGoogle = () => {
        providerLogin(googleProvider)
        .then((result) => {
            const user=result.user;
            console.log(user);  
          })
          .catch(error =>console.error(error))   
    }
    const handleGithub = () => {
        providerLogin(githubProvider)
        .then((result) => {
            const user=result.user;
            console.log(user);  
          })
          .catch(error =>console.error(error))   
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

            <Button onSubmit={handleSubmit} variant="primary" type="submit">
                Login
            </Button>
            <Form.Text className="text-danger">
               
            </Form.Text>
        </Form>
        </div>
        <div className='mb-5'>
            <h6 className='text-secondary'>Login With </h6>
             <ButtonGroup vertical>
                <Button onClick={handleGoogle} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle>  Login with Google</Button>
                <Button onClick={handleGithub} variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>

        </div>
        </div>
    );
};

export default Login;