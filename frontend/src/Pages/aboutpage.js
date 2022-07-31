import * as React from 'react';
import NavBar from "../components/Navbar/NavBar"
import Footer from "../components/Footer/Footer"
import Container from 'react-bootstrap/Container'
import "./Page.css"

class AboutPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    
    render(){
        return(
            <Container fluid>
                <NavBar/>
               
                <Footer />
            </Container>
          
            
        )
    }
}

export default AboutPage;

