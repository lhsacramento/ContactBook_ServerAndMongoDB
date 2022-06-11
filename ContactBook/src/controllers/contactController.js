const Contact = require('../models/ContactModel');

exports.index = function(req,res){
    res.render('contact',{ contact: {}});
};

exports.register = async function(req,res){
    try {
        const user = req.session.user[0];

        const contact = new Contact(req.body,user._id);
        await contact.register();

        if(contact.errors.length > 0){
            req.flash('errors',contact.errors);
            req.session.save(function(){
                return res.redirect('/contact/index');
            });
            return;
        }

        req.flash('success','Contato criado com sucesso!');
        req.session.save(function(){ 
            res.redirect('/');
        });
        return;
    }catch(e){
        console.log(e);
        res.render('404');
    }    
};

exports.editContact = async function(req, res) {
    try {
        if(!req.params.id) return res.render('404');

        const contact = await Contact.findById(req.params.id);
        if(!contact) return res.render('404');
        
        req.session.save(function(){
            return res.render('contact',{contact});
        });
        return;
    }catch(e){
        console.log(e);
    }
   
};

exports.updateContact = async function(req, res) {
    try{        
        if(!req.params.id) return res.render('404');
        const contact = new Contact(req.body);
        await contact.update(req.params.id);
        
        if(contact.errors.length > 0){
            req.flash('errors',contact.errors);
            req.session.save(function(){
                return res.redirect('/contact/index');
            });
            return;
        }
        
        req.flash('success','Contato editado com sucesso!');
        req.session.save(function(){ 
            res.redirect('/');
        });
        return;
    }catch(e){
        console.log(e);
        res.render('404');
    }
};

exports.deleteContact = async function(req, res) {
    if(!req.params.id) return res.render('404');

    const contactDeleted = await Contact.delete(req.params.id);
    req.flash('success','Contato excluído com sucesso!');
        req.session.save(function(){ 
            res.redirect('/');
        });
        return;
};