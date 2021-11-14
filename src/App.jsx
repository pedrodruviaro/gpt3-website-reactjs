import "./App.css";

import { Brand, CTA, Navigation } from "./components";
import {
    Blog,
    Features,
    Footer,
    Header,
    Possibility,
    WhatGPT3,
} from "./containers";

export const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navigation />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    );
};
