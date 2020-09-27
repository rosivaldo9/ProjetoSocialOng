import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

var docDefinition = {}


function createLine() {
    return {
        canvas: [
            {
                type: 'rect',
                x: 0,
                y: 10,
                w: 520,
                h: 0,
                r: 8,
                lineWidth: 2,
                lineColor: '#CC5',
            },
        ]
    }
}

function createSignatureLine() {
    return {
        canvas: [
            {
                type: 'rect',
                x: 0,
                y: 10,
                w: 320,
                h: 0,
                r: 8,
                lineWidth: 1,
                lineColor: '#000000',
            },
        ],
        absolutePosition: { y: 799 },
        alignment: 'center'
    }
}


function getFooter() {
    return {

        columns: [
            { text: 'Assinatura: ', width: 'auto', margin: [40, 0, 0, 0] },
            { canvas: createSignatureLine(), width: 'auto' },

        ]
    }
}


export function setPdfData(pa) {
    docDefinition = {
        info: {
            title: 'awesome Document',
            author: 'john doe',
            subject: 'subject of document',
            keywords: 'keywords for document',
        },
        content: [
            {
                text: pa.nome,
                style: 'header',
            },
            {
                text: [
                    { text: 'Nascido em: ', bold: true },
                    new Date(pa.dataNascimento).toLocaleDateString().substring(0, 10)
                ],
                style: ['label'],
            },
            {
                columns: [
                    { width: 'auto', text: [{ text: 'Sexo: ', bold: true }, pa.sexo,] },
                    { width: 'auto', text: [{ text: 'Peso: ', bold: true }, pa.peso + ' kg',] },
                    { width: 'auto', text: [{ text: 'Raça: ', bold: true }, pa.raca,] },
                    { width: 'auto', text: [{ text: 'Altura: ', bold: true }, pa.altura,] },
                ],
                style: ['label', 'columnStyle'],
            },
            {
                columns: [
                    { width: 'auto', text: [{ text: 'Religião: ', bold: true }, pa.religiao,] },
                    { width: 'auto', text: [{ text: 'Naturalidade: ', bold: true }, pa.naturalidade,] },
                    { width: 'auto', text: [{ text: 'RG: ', bold: true }, pa.rg,] },
                    { width: 'auto', text: [{ text: 'CPF: ', bold: true }, pa.cpf,] },
                ],
                style: ['label', 'columnStyle']
            },
            createLine(),
            { text: 'Escolaridade', style: ['subheader'] },
            {
                columns: [
                    { width: 'auto', text: [{ text: 'Escola: ', bold: true }, pa.escola,] },
                    { width: 'auto', text: [{ text: 'Ano: ', bold: true }, pa.ano,] },
                    { width: 'auto', text: [{ text: 'Ano anterior: ', bold: true }, pa.anoAnterior,] },
                ],
                style: ['label', 'columnStyle']
            },
            createLine(),
            { text: 'Endereço', style: ['subheader'] },
            {
                columns: [
                    { width: 'auto', text: [{ text: 'Rua: ', bold: true }, pa.rua,] },
                    { width: 'auto', text: [{ text: 'Número: ', bold: true }, pa.numero,] },
                    { width: 'auto', text: [{ text: 'Bairro: ', bold: true }, pa.bairro,] },
                    { width: 'auto', text: [{ text: 'Mora com: ', bold: true }, pa.moraComQuem,] },
                ],
                style: ['label', 'columnStyle']
            },
            createLine(),
            { text: 'Resposável', style: ['subheader'] },
            {
                columns: [
                    { width: 'auto', text: [{ text: 'Nome: ', bold: true }, pa.nomeResponsavel,] },
                    { width: 'auto', text: [{ text: 'Nis: ', bold: true }, pa.nis,] },
                    { width: 'auto', text: [{ text: 'Função: ', bold: true }, pa.funcao,] }
                ],
                style: ['label', 'columnStyle']
            },

            {
                columns: [
                    { width: 'auto', text: [{ text: 'Escolaridade: ', bold: true }, pa.escolaridade,] },
                    { width: 'auto', text: [{ text: 'Profissão: ', bold: true }, pa.profissao,] },
                    { width: 'auto', text: [{ text: 'Renda familiar: ', bold: true }, 'R$ ' + pa.rendaFamiliar,] }
                ],
                style: ['label', 'columnStyle']
            },

            {
                columns: [
                    { width: 'auto', text: [{ text: 'Contribuinte: ', bold: true }, pa.contribuinte,] },
                    { width: 'auto', text: [{ text: 'Observação: ', bold: true }, pa.observacao,] },
                ],
                style: ['label', 'columnStyle']
            },

            createSignatureLine(),
            {
                text: 'Assinatura do coordenador',
                absolutePosition: { y: 770 },
                alignment: 'center',
                fontSize: 15

            },

        ],

        // 	footer: getFooter(),

        styles: {
            header: {
                fontSize: 18,
                bold: true,
                alignment: 'left',
                margin: [0, 40, 0, 10]
            },
            subheader: {
                fontSize: 16,
                bold: true,
                margin: [0, 10, 0, 0],
            },
            label: {
                fontSize: 15
            },
            columnStyle: {
                columnGap: 20,
                margin: [0, 10, 0, 0]
            },

        }
    }
}


export function printPdf() {
    pdfMake.createPdf(docDefinition).open()
}
export default function createPreview() {
    const pdfDocGenerator = pdfMake.createPdf(docDefinition);
    pdfDocGenerator.getBlob((blob) => {
        let iframe = document.querySelector('iframe')
        iframe.src = URL.createObjectURL(blob)
    });
}

