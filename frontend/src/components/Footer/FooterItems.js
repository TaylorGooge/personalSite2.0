import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitterSquare, faFacebookSquare, faInstagramSquare,faTiktok } from '@fortawesome/free-brands-svg-icons' 
import Button from 'react-bootstrap/Button';

export const FooterItems = {
    logo: 'https://tgooge.s3.amazonaws.com/download.jpeg',
    email:  <Button className ='footer-button' variant="secondary" onClick={(e) => {e.preventDefault(); window.location.href= 'mailto:test@gmail.com'}}>Contact Us </Button>,
    addressee: 'Business',
    address: '123 Street',
    city: 'Anywhere',
    state: 'Florida',
    zipcode: '32303',
    phone: '123-123-1234',
    socials: [
        {
            link: "#",
            icon: <FontAwesomeIcon icon={faTwitterSquare} />
        },
        {
            link: "#",
            icon: <FontAwesomeIcon icon={faFacebookSquare} />
        },
        {
            link: "#",
            icon: <FontAwesomeIcon icon={faInstagramSquare} />
        },
        {
            link: '#',
            icon: <FontAwesomeIcon icon={faTiktok} />
        }
    ]
}