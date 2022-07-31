import React from 'react';
import "./Email.css"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

class Email extends React.Component{
    render(){
        return(
            <section>
                <div class="container p-3">
                    <h3 className= 'subscribe-item'>Join Our Email List</h3>
                    <Form action="#" method="Post" className= 'subscribe-item'>
                        <InputGroup>
                            <Form.Control
                                placeholder="Enter Your Email"
                                aria-label="Enter Your Email"
                                aria-describedby="basic-addon1"
                                />
                        <Button className="btn btn-secondary">Subscribe</Button>
                        </InputGroup>
                    </Form>
                </div>
            </section>

        )
    }
}

export default Email