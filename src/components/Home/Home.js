import React, { useState, useEffect } from 'react';
import Blog from '../Blog/Blog';

const Home = () => {
    const [homes, setHomes] = useState ([]);
    
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setHomes(data))
    },[])

    return (
        <div>
            {
                homes.map(home =><Blog home={home}></Blog>)
            }
        </div>
    );
};

export default Home;