const mongoose = require("mongoose");
const mogoPaginate = require("mongoose-paginate");

//documento do banco
const Session = new mongoose.Schema({
       
            userId: {
                type: String,
            },
            nivel:{
                type:Number,
            },
            token:{
                type: String,
            }
      

});

//paginando lista
Session.plugin(mogoPaginate);

mongoose.model('Session', Session);