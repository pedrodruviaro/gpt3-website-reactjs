import React from "react";
import { Container } from "./styles";

export const Feature = ({ title, text }) => {
    return (
        <Container>
            <header>
                <div></div>
                <h1>{title}</h1>
            </header>
            <main>
                <p>{text}</p>
            </main>
        </Container>
    );
};
