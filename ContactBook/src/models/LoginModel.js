const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
    email: {type: String, require:  true},
    password: {type: String, require:  true}
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login{
    constructor(body){
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async register(){
        await this.valida();

        if(this.errors.length > 0) return;

        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password,salt);
        this.user = await LoginModel.create(this.body);
    }

    async login(){
        this.cleanUp();
        this.user = await LoginModel.find({ email: this.body.email});

        if(this.user.length < 1){
            this.errors.push('Usuário ou senha incorreto!');
            return;
        }

        if(!bcryptjs.compareSync(this.body.password,this.user[0].password)){
           this.errors.push('Usuário ou senha incorreto!');
           return;
        }
    }



    async valida(){
        this.cleanUp();
        await this.userExists();

        if(!validator.isEmail(this.body.email)) {
            this.errors.push('E-mail inválido');
        }

        if(this.body.password.length < 3 || this.body.password.length > 50){
             this.errors.push('A senha precisa ter entre 3 e 50 caracteres');
        }        
    }

    async userExists(){
        const answer = await LoginModel.find({ email: this.body.email});
        if(this.body.email && answer.length > 0)
        {
            this.errors.push('E-mail já cadastrado');
        }
    }

    cleanUp(){
        for(const key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = '';
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password,
        }
    }
}

module.exports = Login;