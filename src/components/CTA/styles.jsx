import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    max-width: 85rem;
    margin: 4rem auto;

    padding: 2rem;
    border-radius: 1rem;

    background: ${(props) => props.theme.gradientBar};
    color: #212121;

    div {
        p {
            font-weight: 500;
            font-size: 12px;
            line-height: 30px;
        }

        h3 {
            font-weight: 800;
            font-size: 24px;
            line-height: 45px;
        }
    }

    button {
        background: #212121;
        color: #fff;
        border-radius: 40px;
        font-size: 18px;
        line-height: 30px;
        font-weight: 700;

        border: none;
        outline: none;
        cursor: pointer;
        padding: 0.5rem 1rem;

        min-width: 150px;
    }

    @media screen and (max-width: 650px) {
        flex-direction: column;
        text-align: center;
    }

    @media screen and (max-width: 550px) {
        margin: 4rem 2rem;

        h3 {
            font-size: 18px;
            line-height: 32px;
        }

        button {
            font-size: 14px;
            line-height: 28px;
        }
    }
`;
