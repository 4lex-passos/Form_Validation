<p align="center">
  <a href="http://form-validation-4lex-passos.vercel.app/">
    <img src="https://github.com/4lex-passos/Form-Validation/blob/main/public/logo.png" />
  </a>
</p>

<h2 align="center">
   Validação de formulário
</h2>

<p align="center">
    React Hooks - React Router
<br/>
    <a href="http://form-validation-4lex-passos.vercel.app/"><strong>Visualizar  a demo »</strong></a>
</p>

## 🎈 Construído com:

-   [ReactJs](https://pt-br.reactjs.org/)
-   [React Router](https://reactrouter.com/)
-   [Styled Components](https://styled-components.com/)

## 🎈Instalação e execução:

### » Clonando o repositório:

1 - Na página principal do repositório.

2 - Acima da lista de arquivos, clique em código.

<p align="center">
    <img width ="50%" src="https://docs.github.com/assets/images/help/repository/code-button.png" />
</p>

3 - Para clonar o repositório usando HTTPS, em "Clonar com HTTPS", clique no ícone de prancheta.

<p align="center">
    <img width ="50%" src="https://docs.github.com/assets/images/help/repository/https-url-clone.png" />
</p>

4 - Abra Git Bash.

5 - Altere o diretório de trabalho atual para o local em que deseja ter o diretório clonado.

6 - Digite git clone (clonar git) e cole a URL deste repositório:

```sh
$ git clone https://github.com/4lex-passos/Form-Validation.git
```

7 - Pressione Enter para criar seu clone local.

### » Instalando as dependências:

```sh
npm install react-router-dom styled-components
```

ou

```sh
yarn add react-router-dom styled-components
```

## 🎈 Uso:

### » Primeiros passos:

Primeiramente iremos validar os campos de cadastro e criar um usuário para poder simular um login posteriormente.

1 - Clique na aba de NOVO USUÁRIO.

2 - Clique em um campo e depois clique fora do campo:

```sh
A aplicação irá acusar que o campo que não foi preenchido é obrigatório.
```

<p align="center">
    <img width ="70%" src="https://github.com/4lex-passos/Form-Validation/blob/main/src/assets/exemplo1.gif" />
</p>

3 - Volte a preencher o campo:

```sh
Note que alguns campos retornarão um erro caso um requisito não seja atendido pelo campo a ser preenchido.
```

<p align="center">
    <img width ="70%" src="https://github.com/4lex-passos/Form-Validation/blob/main/src/assets/exemplo.gif" />
</p>

4 - Enviando dados do novo usuário:

```sh
O botão [CRIAR CONTA] so irá ser habilitado  quando todos os campos estiverem preenchidos corretamente.
```

5 - Clique em criar conta e espere a confirmação, que dentro de 8 segundos você será redirecionado para a tela de login.

### » Realizando o Login:

Para realizar o login é necessário ter criado previamente um novo usuário:

```sh
Se o email e a senha estiverem corretos, uma mensagem de *SUCESSO* será exibida.
```

<p align="center">
    <img width ="80%" src="https://github.com/4lex-passos/Form-Validation/blob/main/src/assets/loginSucess.PNG" />
</p>

```sh
Se o email e a senha estiverem incorretos, uma mensagem de *ERRO* será exibida e o formulário será resetado.
```

<p align="center">
    <img width ="80%" src="https://github.com/4lex-passos/Form-Validation/blob/main/src/assets/loginError.PNG" />
</p>
