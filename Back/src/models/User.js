
const mongoose = require("mongoose");

//documento do banco
const UserSchema = new mongoose.Schema({
       
    nome: {
        type: String,
    },
    email: {
        type: String,

    },
    password: {
        type: String
    },
    nivel:{
        type: Number
    }

});


mongoose.model('User', UserSchema);