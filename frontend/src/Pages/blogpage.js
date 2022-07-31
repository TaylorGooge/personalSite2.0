import * as React from 'react';
import BlogList from "../components/BlogList/BlogList"
import NavBar from "../components/Navbar/NavBar"
import Footer from "../components/Footer/Footer"
import Container from 'react-bootstrap/Container'
import "./Page.css"

class BlogPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return(
            <Container fluid className= 'blogList-div' >
                <NavBar/>
                <BlogList />
                <Footer />
            </Container>
          
            
        )
    }
}

export default BlogPage;

