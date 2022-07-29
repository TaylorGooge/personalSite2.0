import * as React from 'react';
import NavBar from "../components/Navbar/NavBar"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    
    render(){
        return(
            <div className = 'general container '>
                <NavBar/>
                <Hero/>
                <Footer />
            </div>
          
            
        )
    }
}

export default HomePage;

