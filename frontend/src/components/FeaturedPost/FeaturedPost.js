import * as React from 'react';
import { fetchQuery } from '../../utils'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import "./FeaturedPost.css"


class  FeaturedPost extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            featuredPost: [],
        }
    };
    componentDidMount() {
        fetchQuery('api/blogs?populate=*&sort=publishedAt%3Adesc&pagination[limit]=1')
        .then((result) => {
            if (!result.length <= 0) {
                 //TODO make nice error message
                 return
            }
            console.log(result)
            this.setState({
                featuredPost: result.data,
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
            <Row  className="justify-content-center">
                <div className="col-lg-8">
                    <Card className= "mb-4 featured" >
                    <Card.Img class="card-img-top" src={this.state.featuredPost[0].attributes.image.length > 0 ? this.state.featuredPost[0].attributes.image[0].url : "" }  />
                    <Card.Body>
                    <div clasName="small text-muted"></div>
                        <Card.Title>{this.state.featuredPost[0].attributes.Title}</Card.Title>
                        <p className="card-text">{this.state.featuredPost[0].Tagline}</p>
                        <Link
                            className= 'btn btn-secondary'
                            style={{ display: "block", margin: "1rem 0" }}
                            to={`/blogpost/${this.state.featuredPost[0].id}`}
                            key={this.state.featuredPost[0].id}
                        > Read →
                        </Link>
                    </Card.Body>
                    </Card>
                </div>
            </Row>
            

        )
    }
}

export default FeaturedPost;

