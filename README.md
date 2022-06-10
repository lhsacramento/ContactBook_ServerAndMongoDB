## Contact book with server and MongoDB

<p>
  Esse projeto é basicamente uma agenda de contatos, onde você ira criar uma conta, fazer login e também adicionar, editar e cadastrar contatos em sua agenda.
</p>

<p>
  Nesse projeto usei o padrão de projeto MVC, pois se tratava de um webApp simples e esse padrão já era o suficiente para deixar o projeto bem aberto a adições e modificações.

  
  - Pro banco de dados foi usado o MongoDB. E foi uma esperiência bem legal, pois eu tenho um conhecimento em SQL e bancos relacionais, e esse foi o primeiro contato com um banco não relacional. E uma das coisas que achei interessante foi tentar criar uma relação em um banco não relacional, memso sabendo que nao é a melhor pratica.
  
  - O server dessa aplicação foi feito usando NodeJS, com api's como express, webpack para poder ser usado em diferentes navegadores, Dotenv, validator e bscrypt. 
  - Nas vews eu usei como formatador o EJS que é bem parecido com  o html, tendo maior diferencial na minha opinião as chaves de abertura para códigos javascript.
</p>

### Como utilizar o código?

<p>
  1 - Primeiramente você precisará criar um banco de dados no MongoDB e pegar o link de conexão (lembre de habilitar a conhexão), algo parecido com:
   - mongodb+srv://menunome:senha@NOMEBD.hrgnim5.mongodb.net/NOBASEDADOS?retryWrites=true&w=majority
  2 - Com o banco criado, você precisará criar um arquivo .env na raíz do projeto, onde ficará os arquivos confidencias da conexão como link de conexão, usuário e senha. Nesse arquivo vc coloca "connectionString = link de coneção do bd". Lembre de substituir os campos de user, password com os que vc criou no mongoDB.
  3 - No terminal, acesse a parta raíz do projeto e baixe  os módulos do projeto (npm install).
  4 - Após a instalação basta executar o servidor (npm start).
  5 - Para modificações no código, lembre de executar também o webpack pois usei ele para a plicação ter acesso em varios navegadores. (npm run dev). 
  6 - Lembre de executar os comandos e terminais diferentes.
  7 - Pronto, agora é só acessar, o canal usado é o 3000 então para acessar a aplicação é só digitar http://localhost:3000
</p>


### Qualquer problema com a aplicação, sugestões de mudança e etc, basta entrar em contato comigo! Minhas redes estão no perfil! Obrigado por acessar meu trabalho!
