import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Images from '../Images/Images';

const Coments = () => {
    let { blogId } = useParams ();
    const [blog, setBlog] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${blogId}`)
        .then(response => response.json())
        .then(data => setBlog(data));
    }, [])
    return (
        <div display="flex">
            <div>
                <Images></Images>
            </div>
            <div>
                <h5>{blog.name}</h5>
                <h6>{blog.email}</h6>
                <p>{blog.body}</p>
            </div>
        
        </div>
    );
};

export default Coments;