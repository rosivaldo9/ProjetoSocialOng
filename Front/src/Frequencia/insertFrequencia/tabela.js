import React from 'react';
import { MDBDataTable, MDBFooter } from 'mdbreact';

const DatatablePage = (props) => {

  const data = {
    columns: [

      {
        label: 'Turma',
        field: 'nome',
        sort: 'asc',
        width: 270,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Frequência',
        field: 'frequencia',
        sort: 'asc',
        width: 200
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
    entries={5}
    pagesAmount={4}
    noBottomColumns
  />
}


export default DatatablePage