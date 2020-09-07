import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Coments from '../Comments/Coments';

const BlogDetails = () => {
    let { blogId } = useParams ();
    const [blog, setBlog] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
        .then(response => response.json())
        .then(data => setBlog(data));
    }, [])
    const blogDetailsStyle = {
        border: '1px solid black',
        background: 'lightGray',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'

    }
    return (
        <div style={blogDetailsStyle}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            <Coments></Coments>
        </div>
    );
};

export default BlogDetails;