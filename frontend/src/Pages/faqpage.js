import * as React from 'react';
import NavBar from "../components/Navbar/NavBar"
import Footer from "../components/Footer/Footer"
import FAQ from "../components/FAQ/FAQ"
import Container from 'react-bootstrap/Container'

class FAQPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return(
            <Container fluid>
                <NavBar/>
                <FAQ />
                <Footer />
            </Container>
        )
    }
}

export default FAQPage;

