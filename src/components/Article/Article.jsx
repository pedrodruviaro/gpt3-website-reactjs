import React from "react";
import { Container } from "./styles";

export const Article = ({ image, date, title }) => {
    return (
        <Container>
            <header>
                <img src={image} alt="blog post" />
            </header>

            <main>
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
            </main>
            <footer>
                <a href="/">Read Full Article</a>
            </footer>
        </Container>
    );
};
