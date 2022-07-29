import * as React from 'react';
import { fetchQuery } from '../../utils'
import './BlogList.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'



class BlogList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            blogItems: [],
        }
    };
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
    render(){
        if (!this.state.isLoaded) {
            return <div />
        }
        return(
            <Container>
                {this.state.blogItems.map((item)=> 
                <Card style={{ width: '18rem' }}  key = {item.id}>
                    <Card.Img variant="top" src="holder.js/100px180"/>
                    <Card.Body>
                        <Card.Title>{item.attributes.Title}</Card.Title>
                        <Card.Text>{item.attributes.Tagline}</Card.Text>
                        <Link
                            style={{ display: "block", margin: "1rem 0" }}
                            to={`/blogpost/${item.id}`}
                            key={item.id}
                        > Read
                        </Link>
                    </Card.Body>      
                </Card>
               )}
            </Container>
        )
    }
}

export default BlogList;

