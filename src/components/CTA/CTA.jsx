import React from "react";
import { Container, Wrapper } from "./styles";

export const CTA = () => {
    return (
        <Wrapper className="section__padding">
            <Container>
                <div>
                    <p>Request Early Access to Get Started</p>
                    <h3>
                        Register today &#38; start exploring the endless
                        possiblities.
                    </h3>
                </div>
                <button type="button">Get Started</button>
            </Container>
        </Wrapper>
    );
};
