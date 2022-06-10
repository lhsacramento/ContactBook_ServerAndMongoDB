const mongoose = require('mongoose');
const validator = require('validator');

const contactSchema = new mongoose.Schema({
    name: {type: String, require:  true},
    secondName: {type: String, default: ''},
    email: {type: String, default: ''},
    phoneNumber: {type: String, default: ''},
    createdAt: {type: Date, default: Date.now()},
    creator: {type: String, required: true},
});

const contactModel = mongoose.model('Contact', contactSchema);

class Contact{
    constructor(body,creator) {
        this.creator = creator;
        this.body = body;
        this.errors = [];
        this.contact = null;
    }

    async register(){
        this.valida();

        if(this.errors.length > 0)  return;
        this.contact = await contactModel.create(this.body);
    }

    static async findAllContacts(creator){
        const contacts = await contactModel.find({ creator: creator})
        .sort({ createAt: -1});
        return contacts;
    }

    static async findById(id){
        if(typeof id !== 'string') return;
        const contact = contactModel.findById(id);
        return contact;
    }

    async update(id){
        if(typeof id !== 'string') return;
        this.valida();
        if(this.errors.length > 0)  return;

        this.contact = await contactModel.findByIdAndUpdate(id, this.body,{new:true});
    }

    static async delete(id){
        if(typeof id !== 'string') return;

        const contatoDeleted = await contactModel.findOneAndDelete({_id: id});
        return contatoDeleted;
    }

    valida(){
        this.cleanUp();
        console.log(this.body);

        if(this.body.name.trim() === '') this.errors.push('O campo nome não pode estar vazio!');
        if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('Digite um e-mail válido.');
        if(!this.body.phoneNumber && !this.body.email) this.errors.push('Pelo menos um campo deve ser enviado: Email ou Telefone.')
    }

    cleanUp(){
        for(const key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = '';
            }
        }

        this.body = {
            creator: this.creator,
            name: this.body.name,
            secondName: this.body.secondName,
            email: this.body.email,
            phoneNumber: this.body.phoneNumber,
        }
    }
}

module.exports = Contact;