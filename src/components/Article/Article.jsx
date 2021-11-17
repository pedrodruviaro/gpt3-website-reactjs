import React from "react";
import "./article.css";

export const Article = ({ image, date, title }) => {
    return (
        <div className="gpt3__blog-container_article">
            <div className="gpt3__blog-container_article-image">
                <img src={image} alt="blog post" />
            </div>

            <div className="gpt3__blog-container__article-content">
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    );
};
