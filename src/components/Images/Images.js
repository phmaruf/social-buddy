import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Images = () => {
    let { blogId } = useParams ();
    const [blog, setBlog] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${blogId}`)
        .then(response => response.json())
        .then(data => setBlog(data));
    }, [])
    return (
        <div>
            img({blog.thumbnailUrl})
                       
        </div>
    );
};

export default Images;