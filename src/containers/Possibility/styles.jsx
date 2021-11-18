import styled from "styled-components";

export const Container = styled.section`
    max-width: 85rem;
    margin-inline: auto;

    display: flex;

    > div {
        flex: 1;

        display: flex;
        justify-content: flex-start;
        align-items: center;

        margin-right: 2rem;
    }

    > main {
        flex: 1;

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;

        h4 {
            font-weight: 500;

            line-height: 30px;

            color: #71e5ff;
        }

        h4:last-child {
            color: ${(props) => props.theme.colorSubtext};
        }

        h1 {
            font-weight: 800;
            font-size: 34px;
            line-height: 45px;

            margin: 1rem 0;
        }

        p {
            color: ${(props) => props.theme.colorText};
            line-height: 30px;

            margin-bottom: 2rem;
        }
    }

    @media screen and (max-width: 950px) {
        flex-direction: column;

        > div {
            margin: 1rem 0;
        }

        > main {
            margin-top: 2rem;
        }
    }
`;
