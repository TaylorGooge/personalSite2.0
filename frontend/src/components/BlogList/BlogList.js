import * as React from 'react';
import { fetchQuery } from '../../utils'
import './BlogList.css';
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
            error: null,
            isLoaded: false,
            blogItems: [],
            redirect: false,
            redirectData: []
        }
    }
    handleClick = (event) => {
        let blogPost = event.target.getAttribute('id')
        fetchQuery(`api/blogs/${blogPost}`)
        .then((result) => {
            if (!result.length <= 0) {
                 //TODO make nice error message
                 return
            }
            this.setState({  redirectData: result.data, redirect:true})
        })
        .catch(error => {
        //TODO make nice error page
        console.error('There was an error!', error);
        });
        return 
     }
    componentDidMount() {
        fetchQuery('api/blogs')
        .then((result) => {
            if (!result.length <= 0) {
                 //TODO make nice error message
                 return
            }
            this.setState({
                blogItems: result.data,
                isLoaded: true
            })
        })
        .catch(error => {
        //TODO make nice error page
        console.error('There was an error!', error);
        });
        return 
    };
    componentDidUpdate() {
    }
    render(){
        if (this.state.redirect) {
            console.log('here')
            return <Navigate to="/blogpost" state={{ data: this.state.redirectData }} replace={true} />
          }
        return(
            <Container>
                {this.state.blogItems.map((item)=> 
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{item.attributes.Title}</Card.Title>
                        <Card.Text>{item.attributes.Tagline}</Card.Text>
                        <Button onClick = {this.handleClick} variant="primary" id= {item.id}> Read</Button>
                    </Card.Body>      
                </Card>
               )}

            </Container>
            
        )
    }
}

export default BlogList;

