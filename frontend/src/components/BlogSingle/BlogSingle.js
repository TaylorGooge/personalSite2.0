import * as React from 'react';
import { fetchQuery } from '../../utils'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import "./BlogSingle.css"



class BlogSingle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            isLoaded: false
        }
    }
    formatMyDate(value, locale = 'en-US') {
        return new Date(value).toLocaleDateString(locale);
    }
    componentDidMount(){
        let blogId = this.props.id
        fetchQuery(`api/blogs/${blogId}`)
        .then((result) => {
            if (!result.length <= 0) {
                 //TODO make nice error message
                 return
            }
            this.setState({
                data: result.data,
                isLoaded: true
            })
        })
        .catch(error => {
        //TODO make nice error page
        console.error('There was an error!', error);
        });
        return 

    }  
    render(){
        if (!this.state.isLoaded) {
            return <div />
        }
        return(
            <Container className="mt-5" fluid>
                <Row>
                    <Col className="lg-8">
                        <article>
                            <header className="mb-4">
                                <h1 className="fw-bolder mb-1"> {this.state.data.attributes.Title}  </h1>
                                <div className="text-muted fst-italic mb-2">{this.formatMyDate(this.state.data.attributes.publishedAt)}</div>
                            </header>
                            <Figure className= "mb-4">
                                <img className="img-fluid rounded" src="" alt=""></img>
                            </Figure>
                            <Container fluid className="mb-5">
                                    <ReactMarkdown children={this.state.data.attributes.Content} remarkPlugins={[remarkGfm]}  rehypePlugins={[rehypeRaw]} />
                            </Container>
                        </article>
                    </Col>
                </Row>
                {/* call comment section here */}
            </Container>
        )
    }
}

export default BlogSingle;

