import * as React from 'react';
import { fetchQuery } from '../../utils'
import './BlogList.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import FeaturedPost from '../FeaturedPost/FeaturedPost'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



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
        fetchQuery('api/blogs?populate=*&sort=publishedAt%3Adesc&pagination[start]=1')
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
            <Container fluid  className= 'blogList-items'>
                <h2>Blog</h2>
                <FeaturedPost />
                <Row className="justify-content-center">
                {this.state.blogItems.map((item, i)=> 
                    <Col className= 'd-flex align-items-stretch'>
                        <Card style={{ width: '18rem' }}  key = {item.id} className= 'non-featured'>
                            <Card.Img variant="top" src= {item.attributes.image.length > 0 ? item.attributes.image[0].url : ""}/>
                            <Card.Body>
                                <Card.Title>{item.attributes.Title}</Card.Title>
                                <Card.Text>{item.attributes.Tagline}</Card.Text>
                                <Link
                                    className= 'btn btn-secondary'
                                    style={{ display: "block", margin: "1rem 0" }}
                                    to={`/blogpost/${item.id}`}
                                    key={item.id}
                                > Read →
                                </Link>
                            </Card.Body>      
                        </Card>
                    </Col>
                    )}
                </Row>
            </Container>
        )
    }
}

export default BlogList;

