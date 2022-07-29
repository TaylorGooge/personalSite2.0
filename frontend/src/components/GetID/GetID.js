import React from 'react';
import {useParams} from "react-router-dom";

import BlogSingle from '../BlogSingle/BlogSingle';

function GetId() {

    let params = useParams()

    return (
        <div>
            <BlogSingle id={params.blogId} />
        </div>
    );
}

export default GetId;