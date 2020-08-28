import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = (props) => {

  const data = {
    columns: [
     
  
      {
        label: 'Despesa',
        field: 'despesa',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Data',
        field: 'dataa',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Valor',
        field: 'valorr',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Detalhes',
        field: 'detalhes',
        sort: 'asc',
        width: 200
      },
  
    ],
    rows: props.row

  };

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
      hover
       entriesOptions={[5, 20, 25]} 
      entries={5} 
      pagesAmount={4}
      
    />
  );
}


export default DatatablePage