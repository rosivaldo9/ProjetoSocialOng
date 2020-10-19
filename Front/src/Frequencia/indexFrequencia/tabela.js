import React from 'react';
import { MDBDataTable, MDBFooter } from 'mdbreact';

const DatatablePage = (props) => {

  const data = {
    columns: [
      {
        label: "Data",
        field: "data",
        sort: "desc",
      },
      {
        label: 'Turma',
        field: 'turma',
      },
      {
        label: "Aluno",
        field: "aluno",
      },
      {
        label: "Presente",
        field: "presente", 
      },
      {
        label: "Atualizar",
        field: "atualizar"
      },
      {
        label: "Detalhes",
        field: "detalhes"
      },
      
    ],
    rows: props.rows

  };

  return <MDBDataTable
    striped
    bordered
    medium
    data={data}
    hover
    entriesOptions={[5, 10, 15, 20, 25, 30]}
    entries={15}
    pagesAmount={4}
    noBottomColumns
  />
}


export default DatatablePage