import React from "react";

import { Article } from "../../components";
import { Container } from "./styles";
import { blogPosts } from "./data";

export const Blog = () => {
    return (
        <Container className=" section__padding" id="blog">
            <header>
                <h1 className="gradient__text">
                    A lot is happening, We are blogging about it.
                </h1>
            </header>
            <main>
                <div className="groupA">
                    <Article {...blogPosts.one} />
                </div>
                <div className="groupB">
                    <Article {...blogPosts.two} />
                    <Article {...blogPosts.three} />
                    <Article {...blogPosts.four} />
                    <Article {...blogPosts.five} />
                </div>
            </main>
        </Container>
    );
};
