const mongoose = require('mongoose');
const Servidor = mongoose.model('Servidor');
const deleteFile = require('../util/fileutils')

module.exports = {
    //metodo salvar
    async insert(req, res) {
        let newServidor = JSON.parse(req.body.servidor)
        if (req.files['arquivoFoto']) {
            let fotoSalva = req.files['arquivoFoto'][0]
            newServidor.foto = fotoSalva.path
        }
        const servidor = await Servidor.create(newServidor);
        return res.json(servidor);
    },
    //metodo listar
    async index(req, res) {
        const { page } = req.query;
        const servidor = await Servidor.paginate({}, { page, limit: 5 });
        return res.json(servidor);
    },
    //metodo detalhes
    async detalhes(req, res) {
        const servidor = await Servidor.findById(req.params.id);
        return res.json(servidor);
    },
    //metodo atualizar
    async atualizar(req, res) {
        let modifiedServidor = JSON.parse(req.body.servidor)
       
        if (req.files['arquivoFoto']) {
            //deleta foto anterior se existir
            deleteFile(modifiedServidor.foto)

            let fotoSalva = req.files['arquivoFoto'][0]
            modifiedServidor.foto = fotoSalva.path
        }
        const servidor = await Servidor.findByIdAndUpdate(req.params.id, modifiedServidor, { new: true });
        return res.json(servidor);
    },
    //metodo deletar
    async delete(req, res) {
        const servidor = await Servidor.findById(req.params.id);
        try {
            deleteFile(servidor.foto)
        } catch (error) {
            console.log(error)
        }
        await Servidor.deleteOne(servidor)
        return res.send();
    }
}