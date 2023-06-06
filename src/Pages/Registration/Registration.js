
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




const Registration = () => {
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,password);

    }


    return (
        <div className='m-5 d-flex justify-content-center '>
           <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Your Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Confirm Password" required />
            </Form.Group>
            <Button variant="primary" type="submit" >
                Register
            </Button>
            <Form.Text className="text-danger">
            
            </Form.Text>
        </Form>
        </div>
    );
};

export default Registration;