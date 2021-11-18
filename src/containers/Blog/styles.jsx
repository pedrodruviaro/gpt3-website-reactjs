import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;

    max-width: 85rem;
    margin-inline: auto;

    > header {
        text-align: left;
        margin-bottom: 5rem;

        h1 {
            font-weight: 800;
            font-size: 62px;
            line-height: 75px;

            @media screen and (max-width: 700px) {
                font-size: 46px;
                line-height: 52px;
            }

            @media screen and (max-width: 550px) {
                font-size: 34px;
                line-height: 42px;
            }
        }
    }

    > main {
        display: flex;

        .groupA {
            flex: 0.75;
            margin-right: 2rem;
        }

        .groupB {
            flex: 1;

            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }

        @media screen and (max-width: 990px) {
            flex-direction: column-reverse;

            .groupA {
                margin: 2rem 0;
            }

            .groupA article {
                width: 48%;
            }

            .groupA article header {
                /* width: 100%; */
                height: 250px;
            }
        }

        @media screen and (max-width: 700px) {
            .groupA article {
                width: 100%;
            }

            .groupA article header img {
                height: 225px;
                width: 100%;
            }

            .groupB {
                grid-template-columns: 1fr;
            }
        }
    }
`;
