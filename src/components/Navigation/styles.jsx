import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem 6rem;

    .gpt3__navbar-links {
        flex: 1;

        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .gpt3__navbar-links_logo {
        margin-right: 2rem;
    }

    .gpt3__navbar-links_logo img {
        width: 62px;
        height: 16px;
    }

    .gpt3__navbar-links_container {
        display: flex;
    }

    .gpt3__navbar-sign {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 1rem;
    }

    .gpt3__navbar-links_container p,
    .gpt3__navbar-sign p .gpt3__navbar-menu_container p {
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        text-transform: capitalize;

        margin: 0 1rem;
        cursor: pointer;
    }

    .gpt3__navbar-sign button,
    .gpt3__navbar-menu_container button {
        padding: 0.5rem 1rem;
        background-color: #ff4820;
        border: none;
        font-weight: 500;
        font-size: 18px;
        color: #fff;
        border-radius: 5px;

        outline: none;
        cursor: pointer;
    }

    .gpt3__navbar-menu {
        margin-left: 1rem;
        display: none;
        position: relative;
    }

    .gpt3__navbar-menu svg {
        cursor: pointer;
    }

    .gpt3__navbar-menu_container {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        flex-direction: column;
        text-align: end;
        background-color: ${(props) => props.theme.colorFooter};
        padding: 2rem;

        position: absolute;
        top: 40px;
        right: 0;
        margin-top: 1rem;
        min-width: 210px;
        border-radius: 5px;
        box-shadow: 0 0 5 rgba(0, 0, 0, 0.2);
    }

    .gpt3__navbar-menu_container p {
        margin: 1rem 0;
    }

    .gpt3__navbar-menu_container-links-sign {
        display: none;
    }

    @media screen and (max-width: 1050px) {
        .gpt3__navbar-links_container {
            display: none;
        }

        .gpt3__navbar-menu {
            display: flex;
        }
    }

    @media screen and (max-width: 700px) {
        padding: 2rem 4rem;
    }

    @media screen and (max-width: 550px) {
        padding: 2rem;

        .gpt3__navbar-sign {
            display: none;
        }

        .gpt3__navbar-menu_container {
            top: 20px;
        }

        .gpt3__navbar-menu_container-links-sign {
            display: block;
        }
    }
`;