import styled from "styled-components";

export const Container = styled.header`
    display: flex;

    max-width: 85rem;
    margin-inline: auto;

    main {
        flex: 1;

        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;

        margin-right: 5rem;

        h1 {
            font-weight: 800;
        }

        p {
            color: var(--color-text);
            font-size: 20px;
            line-height: 27px;
            margin-top: 1.5rem;
        }

        @media screen and (max-width: 650px) {
            h1 {
                font-size: 48px;
                line-height: 60px;
            }

            p {
                font-size: 16px;
                line-height: 24px;
            }
        }

        @media screen and (max-width: 490px) {
            h1 {
                font-size: 36px;
                line-height: 48px;
            }

            p {
                font-size: 14px;
                line-height: 24px;
            }
        }
    }

    @media screen and (max-width: 1050px) {
        flex-direction: column;

        main {
            margin: 0 0 3rem;
        }
    }
`;

export const InputContainer = styled.div`
    width: 100%;
    margin: 2rem 0 1rem;

    display: flex;

    input {
        font-size: 1rem;
        flex: 2;
        width: 100%;
        min-height: 50px;
        font-size: 20px;
        line-height: 27px;
        background-color: ${(props) => props.theme.colorFooter};
        border: 2px solid ${(props) => props.theme.colorFooter};
        padding: 0 1rem;
        outline: none;
        color: #fff;

        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    button {
        flex: 1;
        max-width: 100%;
        min-height: 50px;

        background-color: #ff4820;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        color: #fff;
        font-weight: bold;
        font-size: 18px;
        line-height: 27px;
        cursor: pointer;
        outline: none;
        border: none;

        padding-inline: 0.5rem;
    }

    @media screen and (max-width: 490px) {
        input,
        button {
            font-size: 14px;
            line-height: 16px;
        }
    }
`;

export const PeopleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 2rem;

    img {
        width: 180px;
        height: 38px;
    }

    p {
        margin: 0;
        line-height: 38px;
        font-weight: 500;
        margin-left: 1rem;
        font-size: 12px;
        text-align: center;
    }

    @media screen and (max-width: 650px) {
        flex-direction: column;

        p {
            margin: 0;
        }
    }
`;

export const ImageContainer = styled.div`
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;
`;
