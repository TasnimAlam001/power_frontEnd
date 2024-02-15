"use client"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const rows = [

  { id: 2, company: 'Digincon', tCategory :"fdbdf",status: 'Open',customer: "Customer2",area: "Area2",office: "Office2", age: 42 },
  { id: 3, company: 'Google', tCategory :"fdbdf",status: 'Closed',customer: "Customer3",area: "Area3",office: "Office3", age: 45 },
  { id: 4, company: 'Microsoft', tCategory :"fdbdf",status: 'Pending',customer: "Customer4",area: "Area4",office: "Office4", age: 16 },
  { id: 5, company: 'Apple', tCategory :"fdbdf",status: 'Resolved',customer: "Customer5",area: "Area5",office: "Office5", age: null },
  { id: 6, company: 'Amazon', tCategory :"fdbdf",status: 'Open',customer: "Customer6",area: "Area6",office: "Office6", age: 150 },
  { id: 7, company: 'Facebook', tCategory :"fdbdf",status: 'Closed',customer: "Customer7",area: "Area7",office: "Office7", age: 44 },
  { id: 8, company: 'Twitter', tCategory :"fdbdf",status: 'Pending',customer: "Customer8",area: "Area8",office: "Office8", age: 36 },
  { id: 9, company: 'LinkedIn', tCategory :"fdbdf",status: 'Resolved',customer: "Customer9",area: "Area9",office: "Office9", age: 65 },
  { id: 10, company: 'Snapchat', tCategory :"fdbdf",status: 'Open',customer: "Customer10",area: "Area10",office: "Office10", age: 30 },
  { id: 11, company: 'Netflix', tCategory :"fdbdf",status: 'Closed',customer: "Customer11",area: "Area11",office: "Office11", age: 48 },
  { id: 12, company: 'Uber', tCategory :"fdbdf",status: 'Pending',customer: "Customer12",area: "Area12",office: "Office12", age: 25 },
  { id: 13, company: 'Airbnb', tCategory :"fdbdf",status: 'Resolved',customer: "Customer13",area: "Area13",office: "Office13", age: 52 },
  { id: 14, company: 'Tesla', tCategory :"fdbdf",status: 'Open',customer: "Customer14",area: "Area14",office: "Office14", age: 41 },
  { id: 15, company: 'SpaceX', tCategory :"fdbdf",status: 'Closed',customer: "Customer15",area: "Area15",office: "Office15", age: 33 },
  { id: 16, company: 'Alibaba', tCategory :"fdbdf",status: 'Pending',customer: "Customer16",area: "Area16",office: "Office16", age: 28 },
  { id: 17, company: 'Tencent', tCategory :"fdbdf",status: 'Resolved',customer: "Customer17",area: "Area17",office: "Office17", age: 37 },
  { id: 18, company: 'Samsung', tCategory :"fdbdf",status: 'Open',customer: "Customer18",area: "Area18",office: "Office18", age: 49 },
  { id: 19, company: 'Sony', tCategory :"fdbdf",status: 'Closed',customer: "Customer19",area: "Area19",office: "Office19", age: 39 },
  { id: 20, company: 'LG', tCategory :"fdbdf",status: 'Pending',customer: "Customer20",area: "Area20",office: "Office20", age: 55 },
  { id: 21, company: 'Panasonic', tCategory :"fdbdf",status: 'Resolved',customer: "Customer21",area: "Area21",office: "Office21", age: 47 },
  { id: 22, company: 'IBM', tCategory :"fdbdf",status: 'Open',customer: "Customer22",area: "Area22",office: "Office22", age: 31 },
  { id: 23, company: 'Intel', tCategory :"fdbdf",status: 'Closed',customer: "Customer23",area: "Area23",office: "Office23", age: 29 },
  { id: 24, company: 'HP', tCategory :"fdbdf",status: 'Pending',customer: "Customer24",area: "Area24",office: "Office24", age: 46 },
  { id: 25, company: 'Dell', tCategory :"fdbdf",status: 'Resolved',customer: "Customer25",area: "Area25",office: "Office25", age: 38 },
  { id: 26, company: 'Cisco', tCategory :"fdbdf",status: 'Open',customer: "Customer26",area: "Area26",office: "Office26", age: 43 },
  { id: 27, company: 'Oracle', tCategory :"fdbdf",status: 'Closed',customer: "Customer27",area: "Area27",office: "Office27", age: 34 },
  { id: 28, company: 'Accenture', tCategory :"fdbdf",status: 'Pending',customer: "Customer28",area: "Area28",office: "Office28", age: 53 },
  { id: 29, company: 'Infosys', tCategory :"fdbdf",status: 'Resolved',customer: "Customer29",area: "Area29",office: "Office29", age: 32 },
  { id: 30, company: 'TCS', tCategory :"fdbdf",status: 'Open',customer: "Customer30",area: "Area30",office: "Office30", age: 27 },
  { id: 31, company: 'Wipro', tCategory :"fdbdf",status: 'Closed',customer: "Customer31",area: "Area31",office: "Office31", age: 50 },
  { id: 32, company: 'Capgemini', tCategory :"fdbdf",status: 'Pending',customer: "Customer32",area: "Area32",office: "Office32", age: 44 },
  { id: 33, company: 'Cognizant', tCategory :"fdbdf",status: 'Resolved',customer: "Customer33",area: "Area33",office: "Office33", age: 35 },
  { id: 34, company: 'IBM', tCategory :"fdbdf",status: 'Open',customer: "Customer34",area: "Area34",office: "Office34", age: 36 },
  { id: 35, company: 'Microsoft', tCategory :"fdbdf",status: 'Closed',customer: "Customer35",area: "Area35",office: "Office35", age: 47 },
  { id: 36, company: 'Google', tCategory :"fdbdf",status: 'Pending',customer: "Customer36",area: "Area36",office: "Office36", age: 41 },
  { id: 37, company: 'Facebook', tCategory :"fdbdf",status: 'Resolved',customer: "Customer37",area: "Area37",office: "Office37", age: 29 },
  { id: 38, company: 'Apple', tCategory :"fdbdf",status: 'Open',customer: "Customer38",area: "Area38",office: "Office38", age: 52 },
  { id: 39, company: 'Amazon', tCategory :"fdbdf",status: 'Closed',customer: "Customer39",area: "Area39",office: "Office39", age: 30 },
  { id: 40, company: 'Netflix', tCategory :"fdbdf",status: 'Pending',customer: "Customer40",area: "Area40",office: "Office40", age: 43 },
];

const columns = [
  { field: 'id', headerName: 'Ticket ID', width: 120, },
  { headerName: 'Ticket ID', width: 120 , render: (rowdata)=><div style={{background: "green"}}> {rows.age}</div> },
  { field: 'company', headerName: 'Company', width: 120 },
  { field: 'customer', headerName: 'Customer Name', width: 150,  },
  { field: 'area', headerName: 'Area', width: 90 },
  { field: 'office', headerName: 'Office', width: 90 },
  { field: "tCategory", headerName: 'Ticket Category', width: 120 },
  {
    field: 'age',
    headerName: 'Ticket Create Time',
    editable: true,
    align: 'left',
    headerAlign: 'left',
    width: 130,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Ticket Create Time',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row. tCategory :"fdbdf" || ''} ${params.row.company || ''}`,
  // },
];

export default function DataTable() {
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

