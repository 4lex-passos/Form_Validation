<p align="center">
    <img src="https://github.com/4lex-passos/Form_Validation/blob/main/public/README-HEADER-TEMPLATE.png" />
</p>

<h4 align="center">
    ReactJSㅤ᎓ㅤReact Routerㅤ᎓ㅤStyled Components
</h4>

<p align="center">Aplicação de validação de formulário  e autenticação de usuário</p>

<p align="center">
    <a href="https://form-validation-4lex-passos.vercel.app/">
        <img src="https://img.shields.io/static/v1?label=View&message=Demo&color=e43228&style=for-the-badge&logo=ghost"/>
    </a>
    <img src="https://img.shields.io/static/v1?label=Status&message=FINISHED&color=e43228&style=for-the-badge&logo=ghost"/>
    <img src="https://img.shields.io/static/v1?label=License&message=Mit&color=e43228&style=for-the-badge&logo=Ghost"/>
</p>

<br/>
<p alt="INSTALAÇÃO" align="center">
    <img src="https://github.com/4lex-passos/Form_Validation/blob/main/public/README-TITLES-INSTALA%C3%87%C3%83O.png" />
</p>

### CLONANDO O REPOSITÓRIO:
</br>

❶ Navegue para a página principal do repositório.

❷ Acima da lista de arquivos, clique em código.
</br>
<p>
    <img width ="50%" src="https://docs.github.com/assets/images/help/repository/code-button.png" />
</p>

❸ Para clonar o repositório usando HTTPS, em "Clonar com HTTPS", clique no ícone de prancheta.
</br>
<p>
    <img width ="50%" src="https://docs.github.com/assets/images/help/repository/https-url-clone.png" />
</p>

❹ Abra Git Bash.

❺ Altere o diretório de trabalho atual para o local em que deseja ter o diretório clonado.

❻ Digite git clone (clonar git) e cole a URL deste repositório:

```sh
$ git clone https://github.com/4lex-passos/Form_Validation.git
```

❼ Pressione Enter para criar seu clone local.

</br>
</br>

<p alt="EXECUÇÃO" align="center">
    <img src="https://github.com/4lex-passos/Form_Validation/blob/main/public/README-TITLES-EXECU%C3%87%C3%83O.png" />
</p>

❶ Abra o projeto no VsCode.

### INSTALANDO AS DEPENDÊNCIAS:
</br>

❷ No terminal digite:

```sh
npm install
```
Para instalar todas as dependências.

### INICIANDO O APP:
</br>

❸ No terminal digite:

```sh
npm start
```


Para iniciar a aplicação.
</br>

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
