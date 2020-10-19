import React from 'react';
import { MDBDataTable, MDBFooter } from 'mdbreact';

const Datatab = (props) => {

  const data = {
    columns: [

      {
        label: 'Selecione uma turma para adicionar ou remover alunos',
        field: 'nome',
        sort: 'asc',
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      }
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


export default Datatab