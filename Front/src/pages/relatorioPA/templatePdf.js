import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

var docDefinition = {}


export function setPdfData(des) {
    var rows = [['Despesa', 'Descricao', 'Valor', 'Data']]
    des.map((d) => rows.push(
        [d.despesa,
        d.descricao,
        `R$ ${d.valor}`,
        new Date(d.data).toLocaleDateString().substring(0, 10)
        ])
    )

    docDefinition = {
        content: [
            { text: 'Relatorio de despesas', style: 'header' },

            {
                style: 'tableExample',
                table: {
                    widths: [100, '*', 100, 100],
                    body: rows
                }
            }
        ]
    }
}




export function downloadPdf() {
    pdfMake.createPdf(docDefinition).download("relatorio.pdf")
}
export default function createPreview() {
    const pdfDocGenerator = pdfMake.createPdf(docDefinition);
    pdfDocGenerator.getBlob((blob) => {
        let iframe = document.querySelector('iframe')
        iframe.src = URL.createObjectURL(blob)
    });
}

