import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Blog = (props) => {
    const {title, body, id} = props.home;
    const blogStyle = {
        border: '1px solid black',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'

    }
    return (
        <div style={blogStyle}>
            <h1>{title}</h1> 
            <p>{body}</p>
            <Link to={`/blog/${id}`}>
                <Button variant="contained" color="primary">See Details</Button>
            </Link>
        </div>
    );
};

export default Blog;