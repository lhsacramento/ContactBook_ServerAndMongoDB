const Contact = require('../models/ContactModel');

exports.index = async(req,res) => {
    let contacts = {};
    if(req.session.user){
        const user = req.session.user[0];
        contacts = await Contact.findAllContacts(user._id);
    }else{
        contacts = [];
    }
    res.render('index',{contacts});
};