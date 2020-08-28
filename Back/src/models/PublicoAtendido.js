

const mongoose = require("mongoose");
const mogoPaginate = require("mongoose-paginate");

//documento do banco
const PublicoAtendido = new mongoose.Schema({

       
            nome: {
                type: String,
                
            },
            dataNascimento:{
                type: Date,
                
            },
            sexo:{
                type: String,
                
            },
            raca:{
                type: String,
                
            },
            peso:{
                type: Number,
                
            },
            altura:{
                type:Number,
                
            },
            religiao:{
                type: String,
                
            },
            naturalidade:{
                type: String,
                
            },
            rg:{
                type: Number,
 
            },
            cpf:{
                type:Number,

            },
            escola:{
                type: String,
               
            },
            ano:{
                type: String,
               
            },
            anoAnterior:{
                type: String,
               
            },
            rua:{
                type: String,
               
            },
            numero:{
                type: String,
               
            },
            bairro:{
                type: String,
               
            },
            moraComQuem:{
                type: String,
               
            },
            nomeResponsavel:{
                type: String,
               
            },
            rgResponsavel:{
                type: Number,
              
            },
            cpfResponsavel:{
                type:Number,
               
            
            },
            nis:{
                type: Number,
                
            },
            funcao:{
                type: String,
                
            },
            escolaridade:{
                type: String,
                
            },
            profissao:{
                type: String,
                
            },
            rendaFamiliar:{
                type: String,
                
            },
            contribuinte:{
                type: String,
                
            },
            observacao:{
                type: String
            }
        



    


});

//paginando lista
PublicoAtendido.plugin(mogoPaginate);


mongoose.model('PublicoAtendido', PublicoAtendido);
