import * as React from 'react';
import NavBar from "../components/Navbar/NavBar"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"
import Container from 'react-bootstrap/Container'

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    
    render(){
        return(
            <Container fluid>
                <NavBar/>
                <Hero/>
                <Footer />
            </Container>
          
            
        )
    }
}

export default HomePage;

