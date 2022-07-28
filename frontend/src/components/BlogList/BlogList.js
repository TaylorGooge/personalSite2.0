import * as React from 'react';
import { fetchQuery } from '../../utils'

// custom components
import BlogListItem from '../BlogSingle/BlogSingle';

class BlogList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            blogItems: []
        }
    }
    buildBlogList(data){
        console.log(data)

    };
    handleClick(event){
        let blogPost = event.target.parentElement.parentElement.parentElement.getAttribute('id')
        fetchQuery(`api/blogs:${blogPost}`)
        .then((result) => {
            if (!result.length <= 0) {
                 //TODO make nice error message
                 return
            }
            console.log(result)
        })
        .catch(error => {
        //TODO make nice error page
        console.error('There was an error!', error);
        });
        return 
        
    //     fetch(`http://localhost:1337/api/blogs:${blogPost}`, {
    //         method: 'GET',
    //         headers: {
    //             Authorization:
    //             'Bearer 6a2ee7f63694cc3535235e09d3a367cc6e79d171d4b387ffac0caf09dd4efe516df2da191c933f41ee80e02ec3dee23e551f028aabb419c3d41288dc16f293229d5c146aeca34e4a70b0a6e224ebc38d2617f14e762e919936b5554eebe4c23736b78d1a57e2b07e54b5dd782a1c9214351ea15337d2c683a2074f678f168c5f',
    //         }
    //     })
    //     .then(res => res.json())
    //     .then( (result ) => {
    //         console.log(result)
    //     })
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
    render(){
        let blogList = null;
        if (this.props.isLoaded){
            blogList = null;

        }
        blogList = this.state.blogItems.map((item)=> 
            <div>
                <li key={item.id} id = {item.id}> 
                    <ol>
                        <h1>{item.attributes.Title}</h1>
                        <p>{item.attributes.Date}</p>
                        <a onClick= {this.handleClick} ><h2>{item.attributes.Tagline}</h2></a>
                        
                    </ol>
                </li>
            </div>
           
        );
        return(
            blogList
        )
    }
}

export default BlogList;

