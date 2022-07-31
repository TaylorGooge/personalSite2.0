import * as React from 'react';
import NavBar from "../components/Navbar/NavBar"
import Footer from "../components/Footer/Footer"
import GetId from "../components/GetID/GetID"
import Container from 'react-bootstrap/Container'

class BlogSinglePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
        }
    }
    
    render(){
        return(
            <Container fluid>
                <NavBar/>
                <GetId />
                <Footer />
            </Container>
          
            
        )
    }
}

export default BlogSinglePage;
