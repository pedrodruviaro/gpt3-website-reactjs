import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme.colorFooter};

    min-height: 100%;

    > header {
        background: ${(props) => props.theme.colorFooter};
    }

    > main {
        display: grid;
        justify-content: space-between;

        padding: 1rem 1.5rem;

        div {
            margin-bottom: 5rem;
            p {
                font-weight: 700;
                font-size: 12px;
                line-height: 35px;
            }

            h3 {
                font-weight: 800;
                font-size: 25px;
                line-height: 30px;

                @media screen and (max-width: 550px) {
                    font-size: 18px;
                    line-height: 25px;
                }
            }
        }

        a {
            cursor: pointer;
            margin-top: auto;

            display: block;
        }
    }

    > footer {
        padding: 0 1.5rem 1.5rem 1.5rem;
        margin-top: auto;
    }
`;
