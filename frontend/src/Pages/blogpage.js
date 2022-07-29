import * as React from 'react';
import BlogList from "../components/BlogList/BlogList"
import NavBar from "../components/Navbar/NavBar"
import Footer from "../components/Footer/Footer"

class BlogPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return(
            <div className = 'general container '>
                <NavBar/>
                <BlogList />
                <Footer />
            </div>
          
            
        )
    }
}

export default BlogPage;

