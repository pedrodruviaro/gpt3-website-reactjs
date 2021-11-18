import React from "react";
import { Container } from "./styles.jsx";

import { brands } from "./imports";

export const Brand = () => {
    return (
        <Container className="section__padding">
            {brands.map((brand, i) => (
                <div key={i}>
                    <img src={brand} alt="" />
                </div>
            ))}
        </Container>
    );
};
