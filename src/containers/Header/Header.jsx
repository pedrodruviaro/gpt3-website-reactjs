import React from "react";

import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import {
    Container,
    ImageContainer,
    InputContainer,
    PeopleContainer,
} from "./styles";

export const Header = () => {
    return (
        <Container className=" section__padding" id="home">
            <main>
                <h1 className="gradient__text">
                    Let's Build Something amazing with GPT-3 OpenAI
                </h1>

                <p>
                    Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing. Indulgence way
                    everything joy alteration boisterous the attachment. Party
                    we years to order allow asked of.
                </p>

                <InputContainer>
                    <input type="email" placeholder="Your Email Adress" />
                    <button type="button">Get Started</button>
                </InputContainer>

                <PeopleContainer>
                    <img src={people} alt="People" />
                    <p>
                        1,600 people requested access a visit in last 24 hours
                    </p>
                </PeopleContainer>
            </main>

            <ImageContainer>
                <img src={ai} alt="Ai" />
            </ImageContainer>
        </Container>
    );
};
