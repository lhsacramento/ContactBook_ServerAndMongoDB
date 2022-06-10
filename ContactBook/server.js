require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.connectionString).then(() => {
    console.log('Conectado a Base de Dados');
    app.emit('connectedDB');
}).catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const {middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middleware/middleware.js'); 
const  helmet = require('helmet');
const csrf = require('csurf');

app.use(helmet());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname,'public')));

const sessionOptions = session({
    secret: 'asdaksdjakjsdha',
    store: MongoStore.create({mongoUrl:process.env.connectionString}),
    resave: false,
    saveUnitialized: false,
    cookie:{
        maxAge: 1000* 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());

app.set('views',path.resolve(__dirname,'src','views'));
app.set('view engine', 'ejs');

app.use(csrf());
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('connectedDB',() => {
    app.listen(3000,()=>{ 
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    })
});
