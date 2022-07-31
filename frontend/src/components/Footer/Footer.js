import React from 'react';
import "./Footer.css"
import { FooterItems } from './FooterItems';
import './Footer.css'
import Email from "../Email/Email"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Footer extends React.Component{
    render(){
        return(
            <Row className = 'footercontainer p-3 mb-2 text-dark'>
                <Col className = "logo section">
                    <img src = { FooterItems.logo }/>
                </Col>
                <Col className = "contactinfo section">
                        <p> { FooterItems.addressee }</p>
                        <p> { FooterItems.address } </p>
                        <p> { FooterItems.city } { FooterItems.state } { FooterItems.zipcode }</p>
                        <p> {FooterItems.phone } </p>
                        <p>  {FooterItems.email} </p>
                </Col>
                <Col className= 'email-list section'>
                    <Email />
                </Col>
                <Col className = 'socials section'>
                    <ul className = 'footeritems '>
                    {FooterItems.socials.map((index)=> (
                        <li className = 'footeritem' key = {index}>
                            {index.icon}
                        </li>
                    ))}
                    </ul>
                </Col>              
            </Row>   
        )
    }
}

export default Footer