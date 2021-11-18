import styled from "styled-components";

export const Wrapper = styled.div`
    background: ${(props) => props.theme.colorFooter};
    /* ff 3.6+ */
    background: -moz-radial-gradient(
        circle at 30% -100%,
        #042c54 25%,
        rgba(4, 44, 84, 1) 85%,
        rgba(27, 120, 222, 1) 100%
    );

    /* safari 5.1+,chrome 10+ */
    background: -webkit-radial-gradient(
        circle at 30% -100%,
        #042c54 25%,
        rgba(4, 44, 84, 1) 85%,
        rgba(27, 120, 222, 1) 100%
    );

    /* opera 11.10+ */
    background: -o-radial-gradient(
        circle at 30% -100%,
        #042c54 25%,
        rgba(4, 44, 84, 1) 85%,
        rgba(27, 120, 222, 1) 100%
    );

    /* ie 10+ */
    background: -ms-radial-gradient(
        circle at 30% -100%,
        #042c54 25%,
        rgba(4, 44, 84, 1) 85%,
        rgba(27, 120, 222, 1) 100%
    );

    /* global 92%+ browsers support */
    background: radial-gradient(
        circle at 30% -100%,
        #042c54 25%,
        rgba(4, 44, 84, 1) 85%,
        rgba(27, 120, 222, 1) 100%
    );
`;

export const Container = styled.section`
    display: flex;
    flex-direction: column;

    max-width: 85rem;
    margin: 0 auto !important;

    div:first-child {
        display: flex;

        article {
            margin: 0;

            main {
                max-width: 700px;
            }

            @media screen and (max-width: 650px) {
                flex-direction: column;

                main {
                    margin-top: 0.5rem;
                }
            }
        }
    }

    > main {
        display: flex;
        flex-wrap: wrap;

        margin-top: 2rem;

        article {
            flex: 1;
            margin: 1rem;
            min-width: 210px;
            display: unset;
            flex-direction: column;

            main {
                margin-top: 0.5rem;
            }

            @media screen and (max-width: 350px) {
                margin: 1rem 0;
                min-width: 100%;
            }
        }
    }
`;

export const HeadingWGPT3 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 4rem 0 2rem;

    h1 {
        font-weight: 800;
        font-size: 34px;
        line-height: 45px;

        max-width: 510px;
    }

    p {
        font-weight: 500;
        line-height: 30px;
        color: ${(props) => props.theme.colorSubtext};
        cursor: pointer;
    }

    @media screen and (max-width: 850px) {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 0rem;

        p {
            margin-top: 1rem;
        }
    }

    @media screen and (max-width: 650px) {
        h1 {
            font-size: 28px;
            line-height: 40px;
        }
    }
`;
