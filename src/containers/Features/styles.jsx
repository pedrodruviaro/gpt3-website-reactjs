import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    max-width: 85rem;
    margin-inline: auto;

    display: flex;

    > header {
        flex: 1;

        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;

        text-align: left;
        margin-right: 5rem;

        h1 {
            max-width: 426px;
            height: 180px;

            font-weight: 800;
            font-size: 34px;
            line-height: 45px;

            @media screen and (max-width: 550px) {
                font-size: 28px;
                line-height: 38px;
            }
        }

        p {
            font-weight: 500;
            line-height: 30px;
            color: ${(props) => props.theme.colorSubtext};

            margin-top: 2rem;
        }
    }

    main {
        flex: 1.5;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    @media screen and (max-width: 990px) {
        flex-direction: column;

        header {
            margin: 0 0 2rem 0;
        }
    }
`;
