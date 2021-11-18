import React from "react";
import { Feature } from "../../components/Feature/Feature";
import { Wrapper, Container, HeadingWGPT3 } from "./styles";

export const WhatGPT3 = () => {
    return (
        <Wrapper>
            <Container className="section__padding" id="wgpt3">
                <div>
                    <Feature
                        title="What is GPT-3"
                        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
                    />
                </div>
                <HeadingWGPT3>
                    <h1 className="gradient__text">
                        The possibilities are beyond your imagination
                    </h1>
                    <p>Explore The Library</p>
                </HeadingWGPT3>
                <main>
                    <Feature
                        title="Chatbots"
                        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
                    />
                    <Feature
                        title="Knowledgebase"
                        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
                    />
                    <Feature
                        title="Knowledgebase"
                        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
                    />
                </main>
            </Container>
        </Wrapper>
    );
};
