import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
}

    @media (max-width: 900px) {
        flex-direction: column;
    }

    @media (max-width: 730px) {
        flex-direction: column-reverse;
    }
`;

export const BannerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 3;
    min-height: 100vh;
    height: 1;

    color: #fff;
    background-image: url("background.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 900px) {
        min-height: 20%;
    }

    p {
        font-size: 6rem;
        font-weight: bolder;
        text-align: center;

        border: 0.8rem solid var(--cor-red-light);

        padding: 10rem 4.1rem;

        @media (max-width: 900px) {
            font-size: 3.5rem;
            padding: 6rem 3rem;
        }

        @media (max-width: 730px) {
            font-size: 2rem;
            padding: 2rem 6rem;
        }
    }
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex: 2;
`;

export const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 42rem;
    padding: 2rem;

    p {
        text-align: center;
        color: var(--cor-neutral);
        margin: 2rem 0rem 2rem 0rem;
    }

    form {
        width: 100%;
    }
`;

export const Error = styled.span`
    color: red;
    font-size: 1.2rem;
`;

export const NavigationTab = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 4.8rem;

        color: var(--cor-neutral);

        &:hover {
            border-bottom: 2px solid var(--cor-red-dark);
            color: var(--cor-red-dark);
        }
    }
    .active {
        border-bottom: 2px solid var(--cor-red-normal);
        color: var(--cor-red-normal);
    }
`;

export const Logo = styled.img`
    width: 16.1rem;
    height: 19.7rem;
`;

export const Copyright = styled.p`
    color: var(--cor-red-normal);

    font-size: 1rem;
    text-transform: uppercase;
`;

export const LoginOptions = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    width: 100%;
    margin-top: 20px;
`;

export const LoginButton = styled.button`
    background: var(--cor-red-light);
    color: white;

    border: none;
    border-radius: 4px;
    padding: 0.4rem 0.7rem 0.4rem 0.7rem;

    font-size: 1.2rem;

    width: 9.8rem;
    height: 3.2rem;
`;

export const AutentcationError = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    background: #ff5c93;
    color: white;

    padding: 13px 13px;
    margin-top: 25px;

    border-radius: 70px;
    font-size: 1.2rem;
`;

export const AutentcationSucess = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    background: #3cd4a0;
    color: white;

    padding: 13px 13px;
    margin-top: 25px;

    border-radius: 70px;
    font-size: 1.2rem;
`;
