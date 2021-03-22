import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import InputComponent from "../../components/InputComponent";
import emailRegex from "./emailRegex";
import Api from "../../api";

import AlertIcon from "../../assets/alertIcon";
import SucessIcon from "../../assets/sucessIcon";

import {
    Container,
    BannerContainer,
    LoginContainer,
    Logo,
    NavigationTab,
    LoginBox,
    Copyright,
    LoginOptions,
    LoginButton,
    Error,
    AutentcationError,
    AutentcationSucess,
} from "./styles";

export default function Login() {
    const [formIsValid, setFormIsValid] = useState(false);

    const [alertSucessShow, setAlertSucessShow] = useState(false);
    const [alertErrorShow, setAlertErrorShow] = useState(false);

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [emailIsTouched, setEmailIsTouched] = useState(false);

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordIsTouched, setPasswordIsTouched] = useState(false);

    const [autenticationError, setAutenticationError] = useState("");
    const [autenticationSucess, setAutenticationSucess] = useState("");

    useEffect(() => {
        if (!emailError && !passwordError && password.length >= 6) {
            console.log("FORM IS VALID");
            setFormIsValid(true);
        } else {
            console.log("FORM NOT VALID");
            setFormIsValid(false);
        }
    }, [
        email,
        emailError,
        emailIsTouched,
        password,
        passwordError,
        passwordIsTouched,
    ]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email !== "" && password !== "") {
            console.log(`
            Email: ${email}.
            Password: ${password}.
            `);
        } else {
            setAutenticationError("Usuário ou senha incorreto(s)");
        }

        if (email !== "" && password !== "") {
            let json = await Api.signIn(email, password);
            if (json.token) {
                if (alertErrorShow) {
                    setAlertErrorShow(false);
                }

                setAlertSucessShow(true);
                setAutenticationSucess("Login realizado com sucesso");
                setTimeout(() => setAlertSucessShow(false), 10000);
            } else {
                if (alertSucessShow) {
                    setAlertSucessShow(false);
                }
                setEmail("");
                setPassword("");
                setAlertErrorShow(true);
                setAutenticationError("Usuário ou senha incorreto(s)");
                setTimeout(() => setAlertErrorShow(false), 10000);
            }
        }
    };

    //Handle Changes===========================================
    const handleEmailChange = (e) => {
        const input = e.target.value;
        setEmail(input);

        if (!email.length) {
            setEmailError("Campo obrigatório!");
        } else if (!emailRegex.test(email)) {
            setEmailError("Necessário ser um e-mail válido.");
        } else {
            setEmailError("");
        }
    };

    const handlePasswordChange = (e) => {
        const input = e.target.value;
        setPassword(input);

        if (!password.length) {
            setPasswordError("Campo obrigatório!");
        } else {
            setPasswordError("");
        }
    };

    //Handle Blurs===========================================
    const handleEmailBlur = () => {
        if (!email.length) {
            setEmailError("Campo obrigatório!");
        } else if (!emailRegex.test(email)) {
            setEmailError("Necessário ser um e-mail válido.");
        } else {
            setEmailError("");
        }
        setEmailIsTouched(true);
    };

    const handlePasswordBlur = () => {
        if (!password.length) {
            setPasswordError("Campo obrigatório!");
        } else {
            setPasswordError("");
        }
        setPasswordIsTouched(true);
    };

    //Submit Disable==============================================================
    const submitDisable = !!emailError || !!passwordError;

    return (
        <Container>
            <BannerContainer>
                <main>
                    <p>
                        IF YOU CAN
                        <br /> DREAM IT,
                        <br /> WE CAN DO
                    </p>
                </main>
            </BannerContainer>

            <LoginContainer>
                <main>
                    <LoginBox>
                        <Logo src="logo.png" />

                        <NavigationTab>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <a className="active">LOGIN</a>
                            </Link>

                            <Link
                                to="/SignUp"
                                style={{ textDecoration: "none" }}
                            >
                                <a>NOVO USUÁRIO</a>
                            </Link>
                        </NavigationTab>

                        <p>
                            Bem-vindo(a)!
                            <br /> Faça login ou cadastre-se para acessar a
                            ferramenta.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <InputComponent
                                placeholder="E-mail"
                                type="email"
                                label="email"
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                                onBlur={handleEmailBlur}
                            />
                            <Error>{emailError}</Error>

                            <InputComponent
                                placeholder="Senha"
                                type="password"
                                label="password"
                                name="password"
                                value={password}
                                onChange={handlePasswordChange}
                                onBlur={handlePasswordBlur}
                            />
                            <Error>{passwordError}</Error>

                            <LoginOptions>
                                {formIsValid ? (
                                    <LoginButton
                                        style={{
                                            background: "var(--cor-red-normal)",
                                        }}
                                        onClick={handleSubmit}
                                        disabled={submitDisable}
                                        type="submit"
                                    >
                                        ACESSAR
                                    </LoginButton>
                                ) : (
                                    <LoginButton
                                        disabled={submitDisable}
                                        type="submit"
                                    >
                                        ACESSAR
                                    </LoginButton>
                                )}
                            </LoginOptions>
                        </form>

                        {alertSucessShow ? (
                            <AutentcationSucess>
                                <SucessIcon />
                                {autenticationSucess}
                            </AutentcationSucess>
                        ) : (
                            ""
                        )}

                        {alertErrorShow ? (
                            <AutentcationError>
                                <AlertIcon />
                                {autenticationError}
                            </AutentcationError>
                        ) : (
                            ""
                        )}
                    </LoginBox>
                </main>

                <footer>
                    <Copyright>
                        © 2020 Todos direitos reservados À LOREM ipsum
                    </Copyright>
                </footer>
            </LoginContainer>
        </Container>
    );
}
