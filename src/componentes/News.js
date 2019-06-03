import React from 'react';
import Article from './Article'


const News = ({news}) => (    
    <div className="row">
        {news.map((article, idx) => (
            <Article 
                key={idx}
                article={article}/>
        ))}
    </div>
);

export default News;