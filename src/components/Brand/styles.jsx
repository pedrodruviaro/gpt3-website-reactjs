import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    max-width: 85rem;
    margin-inline: auto;

    > * {
        flex: 1;

        max-width: 150px;
        min-width: 120px;
        margin: 1rem;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
