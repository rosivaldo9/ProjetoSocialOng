const PDFDocument = require('pdfkit');


module.exports ={
 rel(req, res){
const doc = new PDFDocument;

doc.pipe(fs.createWriteStream('output.pdf'))
}
}
