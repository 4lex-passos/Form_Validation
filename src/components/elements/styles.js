import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const BannerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 3;
    height: 100vh;

    color: #fff;
    background-image: url("background.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    p {
        font-size: 6rem;
        font-weight: bolder;
        text-align: center;

        border: 0.8rem solid var(--cor-red-light);

        padding: 10rem 4.1rem;
    }
`;
