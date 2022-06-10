const Login = require('../models/LoginModel');

exports.index = (req,res) => {
    return res.render('register');
};

exports.register = async function(req,res) {
    try {
        const login = new Login(req.body);
        await login.register();

        if(login.errors.length > 0){
            req.flash('errors',login.errors);
            req.session.save(function(){
                return res.redirect('/register/index');
            });
            return;
        }

        req.flash('success','Usuário criado com sucesso!');
        req.session.save(function(){
            return res.redirect('/login/index');
        });
        return;

    }catch(e) {
        console.log(e);
        return res.render('404');
    }
};