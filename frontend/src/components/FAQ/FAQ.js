import * as React from 'react';
import { fetchQuery } from '../../utils'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { Accordion } from "react-bootstrap";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import "./FAQ.css"


class FAQ extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            faqItems: [],
        }
    };
    componentDidMount() {
        fetchQuery('api/faqs')
        .then((result) => {
            if (!result.length <= 0) {
                 //TODO make nice error message
                 return
            }
            this.setState({
                faqItems: result.data,
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
            <Container fluid  className= 'faq-items'>
                <h2>Frequently Asked Questions</h2>
                <Accordion>
                    {this.state.faqItems.map((item, i)=> 
                        <Accordion.Item eventKey={item.id} key={item.id}> 
                             <Accordion.Header className= 'FAQ-q' >{item.attributes.Question} </Accordion.Header>
                            <Accordion.Body>
                                <ReactMarkdown children={item.attributes.Answer} remarkPlugins={[remarkGfm]}  rehypePlugins={[rehypeRaw]} />
                            </Accordion.Body> 
                        </Accordion.Item>
                    )}
                </Accordion>
            </Container>
        )
    }
}

export default FAQ;

