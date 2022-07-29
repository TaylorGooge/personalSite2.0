import * as React from 'react';
import NavBar from "../components/Navbar/NavBar"
import Footer from "../components/Footer/Footer"
import GetId from "../components/GetID/GetID"

class BlogSinglePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
        }
    }
    
    render(){
        return(
            <div className = 'general container '>
                <NavBar/>
                <GetId />
                <Footer />
            </div>
          
            
        )
    }
}

export default BlogSinglePage;
