##  Agenda com server Node.js e MongoDB

  Esse projeto é basicamente uma agenda de contatos, onde você ira criar uma conta, fazer login e também adicionar, editar e cadastrar contatos em sua agenda.
  
  
  Nesse projeto usei o padrão de projeto MVC, pois se tratava de um webApp simples e esse padrão já era o suficiente para deixar o projeto bem aberto a adições e modificações.
  
  
  - Pro banco de dados foi usado o MongoDB. E foi uma esperiência bem legal, pois eu tenho um conhecimento em SQL e bancos relacionais, e esse foi o primeiro contato com um banco não relacional. E uma das coisas que achei interessante foi tentar criar uma relação em um banco não relacional, memso sabendo que nao é a melhor pratica.
  
  - O server dessa aplicação foi feito usando NodeJS, com api's como express, webpack para poder ser usado em diferentes navegadores, Dotenv, validator e bscrypt. 
  - Nas vews eu usei como formatador o EJS que é bem parecido com  o html, tendo maior diferencial na minha opinião as chaves de abertura para códigos javascript.


### Como utilizar o código?


  1. Primeiramente você precisará criar um banco de dados no MongoDB e pegar o link de conexão (lembre de habilitar a conhexão), algo parecido com: 
        > congodb+srv://menunome:senha@NOMEBD.hrgnim5.mongodb.net/NOBASEDADOS?retryWrites=true&w=majority
 
  
  2. Com o banco criado, você precisará criar um arquivo .env na raíz do projeto, onde ficará os arquivos confidencias da conexão como link de conexão, usuário e senha. Nesse arquivo vc coloca: <br>
        ``connectionString = congodb+srv://menunome:senha@NOMEBD.hrgnim5.mongodb.net/NOBASEDADOS?retryWrites=true&w=majority``
        * Lembre de substituir os campos de user, password com os que vc criou no mongoDB.
  3. Já no terminal, acesse a parta raíz do projeto e baixe  os módulos do projeto usando: 
        > npm install 
        * Recomendo usar o VS Code, pois já tem terminal integrado e foi o editor de códigos que usei.

  4. Após a instalação basta executar o servidor: 
        > npm start
  
  5. Caso faça modificações no código, lembre de executar também o webpack pois usei ele para a aplicação ter acesso em varios navegadores. Execute o comando
        > npm run dev
        * deixe esse comando ativado enquanto digita as modificações, pois ele assistirá as modificações e fará a conversão automaticamente.
   
  6. Pronto, agora é só acessar a aplicação. O canal usado é o 3000 então para acessar a aplicação é só digitar ``http://localhost:3000`` em seu navegador.



### Qualquer problema com a aplicação, sugestões de mudança e etc, basta entrar em contato comigo! Minhas redes estão no perfil! 
## Deixe seu feedback pra eu saber como estou programando, seja com dicas, criticas ou sugestões sobre os códigos, métodos e recursos que facilitariam e etc. 
# Obrigado por acessar meu trabalho!
