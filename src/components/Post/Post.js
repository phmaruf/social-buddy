import React, { useState, useEffect } from 'react';
import News from '../News/News';
import './Post.css';


const Post = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c95e134bbbed4f98a8cefd51885e401b';
        fetch(url)
        .then(response => response.json())
        .then(data => setArticles(data.articles))
    }, [])
    return (
        <div class="post">
            
            {
                articles.map(article => <News article = {article}></News>)
            }
            
        </div>
    );
};

export default Post;