import * as React from 'react';
import { fetchQuery } from '../../utils'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import { Navigate } from "react-router-dom";
import {useEffect, useState} from 'react';
import BlogSinglePage from "../../Pages/blogsinglepage"

class BlogList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            redirectData: []
        }
    }
    
    render(){
      
        return(
            <Container>
                <h2></h2>
            </Container>
        )
    }
}

export default BlogList;

