import React from 'react';
import "./Footer.css"
import { FooterItems } from './FooterItems';
import './Footer.css'

class Footer extends React.Component{
    render(){
        return(
            <section className = 'footercontainer p-3 mb-2 bg-light text-dark'>
                <div className = "logo section">
                    <img src = { FooterItems.logo }/>
                </div>
                <div className = "contactinfo section">
                        <p> { FooterItems.addressee }</p>
                        <p> { FooterItems.address } </p>
                        <p> { FooterItems.city } { FooterItems.state } { FooterItems.zipcode }</p>
                        <p> {FooterItems.phone } </p>
                        <p>  {FooterItems.email} </p>
                </div>
                <div className = 'socials section'>
                    <ul className = 'footeritems '>
                    {FooterItems.socials.map((index)=> (
                        <li className = 'footeritem ' key = {index}>
                            {index.icon}
                        </li>
                    ))}
                    </ul>
                </div>              
            </section>   
        )
    }
}

export default Footer