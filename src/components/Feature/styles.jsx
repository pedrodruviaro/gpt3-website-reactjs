import styled from "styled-components";

export const Container = styled.article`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    margin: 1rem;

    > header {
        flex: 1;
        max-width: 180px;
        margin-right: 2rem;

        div {
            width: 38px;
            height: 3px;
            background: ${(props) => props.theme.gradientBar};
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            margin-bottom: 0.25rem;
        }

        h1 {
            font-weight: 800;
            font-size: 18px;
            line-height: 24px;
        }
    }

    > main {
        flex: 2;
        max-width: 390px;
        display: flex;

        p {
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            color: ${(props) => props.theme.colorText};
        }
    }

    @media screen and (max-width: 550px) {
        margin: 1rem 0;

        h1 {
            font-size: 14px;
            line-height: 22px;
        }

        p {
            font-size: 12px;
            line-height: 20px;
        }
    }
`;
