import React from 'react';
import { MDBDataTable, MDBFooter } from 'mdbreact';

const DatatablePage = (props) => {

  const data = {
    columns: [

      {
        label: 'Nome',
        field: 'nome',
        sort: 'asc',
        width: 270,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      // {
      //   label: 'Detalhes',
      //   field: 'detalhes',
      //   sort: 'asc',
      //   width: 200
      // },
      {
        label: 'Deletar',
        field: 'deletar',
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
    entries={15}
    pagesAmount={4}
    noBottomColumns
  />
}


export default DatatablePage