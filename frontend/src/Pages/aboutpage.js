import * as React from 'react';
import NavBar from "../components/Navbar/NavBar"
import Footer from "../components/Footer/Footer"

class AboutPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    
    render(){
        return(
            <div className = 'general container '>
                <NavBar/>
               
                <Footer />
            </div>
          
            
        )
    }
}

export default AboutPage;

