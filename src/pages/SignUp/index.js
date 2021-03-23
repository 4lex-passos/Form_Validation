import React, { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";

import EmailIcon from "../../assets/emailIcon";
import InputComponent from "../../components/InputComponent";
import Api from "../../api";

import {
    Container,
    BannerContainer,
    SignUpContainer,
    Logo,
    NavigationTab,
    SignUpBox,
    Copyright,
    LoginOptions,
    SubmitButton,
    Error,
    AutentcationSucess,
} from "./styles";

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const nameRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;

export default function Login() {
    const [formIsValid, setFormIsValid] = useState(false);

    const [signUpConfirm, setSignUpConfirm] = useState("");
    const [alertSignUpConfirm, setAlertSignUpConfirm] = useState(false);

    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [nameIsTouched, setnameIsTouched] = useState(false);

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [emailIsTouched, setEmailIsTouched] = useState(false);

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordIsTouched, setPasswordIsTouched] = useState(false);

    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [passwordConfirmError, setPasswordConfirmError] = useState("");
    const [passwordConfirmIsTouched, setPasswordConfirmIsTouched] = useState(
        false
    );

    useEffect(() => {
        if (
            !nameError &&
            !emailError &&
            !passwordError &&
            password.length > 5
        ) {
            setFormIsValid(true);
        } else {
            setFormIsValid(false);
        }
    }, [
        name,
        nameError,
        nameIsTouched,
        email,
        emailError,
        emailIsTouched,
        password,
        passwordError,
        passwordIsTouched,
    ]);

    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(`
        Name: ${name}.
        Email: ${email}.
        Password: ${password}.
        PasswordV: ${passwordConfirm}.
        `);
        if (
            name !== "" &&
            email !== "" &&
            password !== "" &&
            passwordConfirm !== ""
        ) {
            let res = await Api.signUp(name, email, password);

            if (res.error) {
                alert(res.error);
            } else {
                if (res.token) {
                    setAlertSignUpConfirm(true);
                    setSignUpConfirm(
                        "Solicitação enviada! Aguarde a aprovação do cadastro"
                    );
                    setTimeout(() => history.push("/"), 7000);
                }
            }
        } else {
            alert("preencha todos os campos");
        }
    };

    //Handle Changes===========================================
    const handleNameChange = (e) => {
        const input = e.target.value;
        setName(input);

        if (!name.length) {
            setNameError("Campo obrigatório!");
        } else if (!nameRegex.test(name) || name.length < 5) {
            setNameError(
                "Deve conter peno menos 5 caracteres e ser composto apenas por letras."
            );
        } else {
            setNameError("");
        }
    };

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
        } else if (password.length <= 5) {
            setPasswordError(
                "Deve conter 6 caracteres ou mais, ao menos um caractere especial, uma letra maiúscula e um dígito numérico."
            );
        } else {
            setPasswordError("");
        }
    };

    const handlePasswordConfirmChange = (e) => {
        const input = e.target.value;
        setPasswordConfirm(input);

        if (!passwordConfirm.length) {
            setPasswordConfirmError("Campo obrigatório!");
        } else {
            setPasswordConfirmError("");
        }
    };

    //Handle Blurs===========================================
    const handleNameBlur = () => {
        if (!name.length) {
            setNameError("Campo obrigatório!");
        } else if (!nameRegex.test(name) || name.length < 5) {
            setNameError(
                "Deve conter peno menos 3 caracteres e ser composto apenas por letras."
            );
        } else {
            setNameError("");
        }
        setnameIsTouched(true);
    };

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
        } else if (password.length < 6) {
            setPasswordError(
                "Deve conter 6 caracteres ou mais, ao menos um caractere especial, uma letra maiúscula e um dígito numérico."
            );
        } else {
            setPasswordError("");
        }
        setPasswordIsTouched(true);
    };

    const handlePasswordConfirmBlur = () => {
        if (!passwordConfirm.length) {
            setPasswordConfirmError("Campo obrigatório!");
        } else if (passwordConfirm !== password) {
            setPasswordConfirmError("As senhas precisam ser iguais.");
        } else {
            setPasswordConfirmError("");
        }
        setPasswordConfirmIsTouched(true);
    };

    //Submit Disable==============================================================
    const submitDisable =
        !!nameError ||
        !!emailError ||
        !!passwordError ||
        !!passwordConfirmError;

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

            <SignUpContainer>
                <main>
                    <SignUpBox>
                        <Logo src="logo.png" />

                        <NavigationTab>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <span>LOGIN</span>
                            </Link>

                            <Link
                                to="/SignUp"
                                style={{ textDecoration: "none" }}
                            >
                                <a className="active">NOVO USUÁRIO</a>
                            </Link>
                        </NavigationTab>

                        <p>Informe os dados abaixo para se cadastrar:</p>

                        <form onSubmit={handleSubmit}>
                            <InputComponent
                                placeholder="Nome completo*"
                                type="text"
                                label="Nome"
                                name="name"
                                value={name}
                                onChange={handleNameChange}
                                onBlur={handleNameBlur}
                            />
                            <Error>{nameError}</Error>

                            <InputComponent
                                placeholder="E-mail*"
                                type="email"
                                label="E-mail"
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                                onBlur={handleEmailBlur}
                            />
                            <Error>{emailError}</Error>

                            <InputComponent
                                placeholder="Senha*"
                                type="password"
                                label="Senha"
                                name="password"
                                value={password}
                                onChange={handlePasswordChange}
                                onBlur={handlePasswordBlur}
                            />
                            <Error>{passwordError}</Error>

                            <InputComponent
                                placeholder="Confirmar senha*"
                                type="password"
                                label="Confirmar senha"
                                name="passwordConfirm"
                                value={passwordConfirm}
                                onChange={handlePasswordConfirmChange}
                                onBlur={handlePasswordConfirmBlur}
                            />
                            <Error>{passwordConfirmError}</Error>

                            <LoginOptions>
                                {formIsValid ? (
                                    <SubmitButton
                                        style={{
                                            background: "var(--cor-red-normal)",
                                        }}
                                        onClick={handleSubmit}
                                        disabled={submitDisable}
                                        type="submit"
                                    >
                                        CRIAR CONTA
                                    </SubmitButton>
                                ) : (
                                    <SubmitButton
                                        disabled={submitDisable}
                                        type="submit"
                                    >
                                        CRIAR CONTA
                                    </SubmitButton>
                                )}
                            </LoginOptions>
                        </form>

                        {alertSignUpConfirm ? (
                            <AutentcationSucess>
                                <EmailIcon />
                                {signUpConfirm}
                            </AutentcationSucess>
                        ) : (
                            ""
                        )}
                    </SignUpBox>
                </main>

                <footer>
                    <Copyright>
                        © 2020 Todos direitos reservados À LOREM ipsum
                    </Copyright>
                </footer>
            </SignUpContainer>
        </Container>
    );
}
