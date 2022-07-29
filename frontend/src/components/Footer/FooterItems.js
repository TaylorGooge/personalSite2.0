import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitterSquare, faFacebookSquare, faInstagramSquare,faTiktok } from '@fortawesome/free-brands-svg-icons' 
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

export const FooterItems = {
    logo: './IMG/Footer/logo.png',
    email:  <Button variant="secondary" onClick={(e) => {e.preventDefault(); window.location.href= 'mailto:test@gmail.com'}}>Email Buisness </Button>,
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