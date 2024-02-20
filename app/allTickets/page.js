"use client";
import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import TableStatusColumn from "../components/tableStatus/page";
import TableIdColumn from "../components/tableIdColumn/page";
import Link from "next/link";
import TicketId from "./ticketId/page";

// const rows = [
//   {
//     id: 2,
//     company: "Digincon",
//     tCategory: "fdbdf",
//     status: "Open",
//     customer: "Customer2",
//     area: "Area2",
//     office: "Office2",
//     age: 42,
//   },
//   {
//     id: 3,
//     company: "Google",
//     tCategory: "fdbdf",
//     status: "Closed",
//     customer: "Customer3",
//     area: "Area3",
//     office: "Office3",
//     age: 45,
//   },
//   {
//     id: 4,
//     company: "Microsoft",
//     tCategory: "fdbdf",
//     status: "Pending",
//     customer: "Customer4",
//     area: "Area4",
//     office: "Office4",
//     age: 16,
//   },
//   {
//     id: 5,
//     company: "Apple",
//     tCategory: "fdbdf",
//     status: "Resolved",
//     customer: "Customer5",
//     area: "Area5",
//     office: "Office5",
//     age: null,
//   },
//   {
//     id: 6,
//     company: "Amazon",
//     tCategory: "fdbdf",
//     status: "Open",
//     customer: "Customer6",
//     area: "Area6",
//     office: "Office6",
//     age: 150,
//   },
//   {
//     id: 7,
//     company: "Facebook",
//     tCategory: "fdbdf",
//     status: "Closed",
//     customer: "Customer7",
//     area: "Area7",
//     office: "Office7",
//     age: 44,
//   },
//   {
//     id: 8,
//     company: "Twitter",
//     tCategory: "fdbdf",
//     status: "Pending",
//     customer: "Customer8",
//     area: "Area8",
//     office: "Office8",
//     age: 36,
//   },
//   {
//     id: 9,
//     company: "LinkedIn",
//     tCategory: "fdbdf",
//     status: "Resolved",
//     customer: "Customer9",
//     area: "Area9",
//     office: "Office9",
//     age: 65,
//   },
//   {
//     id: 10,
//     company: "Snapchat",
//     tCategory: "fdbdf",
//     status: "Open",
//     customer: "Customer10",
//     area: "Area10",
//     office: "Office10",
//     age: 30,
//   },
//   {
//     id: 11,
//     company: "Netflix",
//     tCategory: "fdbdf",
//     status: "Closed",
//     customer: "Customer11",
//     area: "Area11",
//     office: "Office11",
//     age: 48,
//   },
//   {
//     id: 12,
//     company: "Uber",
//     tCategory: "fdbdf",
//     status: "Pending",
//     customer: "Customer12",
//     area: "Area12",
//     office: "Office12",
//     age: 25,
//   },
//   {
//     id: 13,
//     company: "Airbnb",
//     tCategory: "fdbdf",
//     status: "Resolved",
//     customer: "Customer13",
//     area: "Area13",
//     office: "Office13",
//     age: 52,
//   },
//   {
//     id: 14,
//     company: "Tesla",
//     tCategory: "fdbdf",
//     status: "Open",
//     customer: "Customer14",
//     area: "Area14",
//     office: "Office14",
//     age: 41,
//   },
//   {
//     id: 15,
//     company: "SpaceX",
//     tCategory: "fdbdf",
//     status: "Closed",
//     customer: "Customer15",
//     area: "Area15",
//     office: "Office15",
//     age: 33,
//   },
//   {
//     id: 16,
//     company: "Alibaba",
//     tCategory: "fdbdf",
//     status: "Pending",
//     customer: "Customer16",
//     area: "Area16",
//     office: "Office16",
//     age: 28,
//   },
//   {
//     id: 17,
//     company: "Tencent",
//     tCategory: "fdbdf",
//     status: "Resolved",
//     customer: "Customer17",
//     area: "Area17",
//     office: "Office17",
//     age: 37,
//   },
//   {
//     id: 18,
//     company: "Samsung",
//     tCategory: "fdbdf",
//     status: "Open",
//     customer: "Customer18",
//     area: "Area18",
//     office: "Office18",
//     age: 49,
//   },
//   {
//     id: 19,
//     company: "Sony",
//     tCategory: "fdbdf",
//     status: "Closed",
//     customer: "Customer19",
//     area: "Area19",
//     office: "Office19",
//     age: 39,
//   },
//   {
//     id: 20,
//     company: "LG",
//     tCategory: "fdbdf",
//     status: "Pending",
//     customer: "Customer20",
//     area: "Area20",
//     office: "Office20",
//     age: 55,
//   },
//   {
//     id: 21,
//     company: "Panasonic",
//     tCategory: "fdbdf",
//     status: "Resolved",
//     customer: "Customer21",
//     area: "Area21",
//     office: "Office21",
//     age: 47,
//   },
//   {
//     id: 22,
//     company: "IBM",
//     tCategory: "fdbdf",
//     status: "Open",
//     customer: "Customer22",
//     area: "Area22",
//     office: "Office22",
//     age: 31,
//   },
//   {
//     id: 23,
//     company: "Intel",
//     tCategory: "fdbdf",
//     status: "Closed",
//     customer: "Customer23",
//     area: "Area23",
//     office: "Office23",
//     age: 29,
//   },
//   {
//     id: 24,
//     company: "HP",
//     tCategory: "fdbdf",
//     status: "Pending",
//     customer: "Customer24",
//     area: "Area24",
//     office: "Office24",
//     age: 46,
//   },
//   {
//     id: 25,
//     company: "Dell",
//     tCategory: "fdbdf",
//     status: "Resolved",
//     customer: "Customer25",
//     area: "Area25",
//     office: "Office25",
//     age: 38,
//   },
//   {
//     id: 26,
//     company: "Cisco",
//     tCategory: "fdbdf",
//     status: "Open",
//     customer: "Customer26",
//     area: "Area26",
//     office: "Office26",
//     age: 43,
//   },
//   {
//     id: 27,
//     company: "Oracle",
//     tCategory: "fdbdf",
//     status: "Closed",
//     customer: "Customer27",
//     area: "Area27",
//     office: "Office27",
//     age: 34,
//   },
//   {
//     id: 28,
//     company: "Accenture",
//     tCategory: "fdbdf",
//     status: "Pending",
//     customer: "Customer28",
//     area: "Area28",
//     office: "Office28",
//     age: 53,
//   },
//   {
//     id: 29,
//     company: "Infosys",
//     tCategory: "fdbdf",
//     status: "Resolved",
//     customer: "Customer29",
//     area: "Area29",
//     office: "Office29",
//     age: 32,
//   },
//   {
//     id: 30,
//     company: "TCS",
//     tCategory: "fdbdf",
//     status: "Open",
//     customer: "Customer30",
//     area: "Area30",
//     office: "Office30",
//     age: 27,
//   },
//   {
//     id: 31,
//     company: "Wipro",
//     tCategory: "fdbdf",
//     status: "Closed",
//     customer: "Customer31",
//     area: "Area31",
//     office: "Office31",
//     age: 50,
//   },
//   {
//     id: 32,
//     company: "Capgemini",
//     tCategory: "fdbdf",
//     status: "Pending",
//     customer: "Customer32",
//     area: "Area32",
//     office: "Office32",
//     age: 44,
//   },
//   {
//     id: 33,
//     company: "Cognizant",
//     tCategory: "fdbdf",
//     status: "Resolved",
//     customer: "Customer33",
//     area: "Area33",
//     office: "Office33",
//     age: 35,
//   },
//   {
//     id: 34,
//     company: "IBM",
//     tCategory: "fdbdf",
//     status: "Open",
//     customer: "Customer34",
//     area: "Area34",
//     office: "Office34",
//     age: 36,
//   },
//   {
//     id: 35,
//     company: "Microsoft",
//     tCategory: "fdbdf",
//     status: "Closed",
//     customer: "Customer35",
//     area: "Area35",
//     office: "Office35",
//     age: 47,
//   },
//   {
//     id: 36,
//     company: "Google",
//     tCategory: "fdbdf",
//     status: "Pending",
//     customer: "Customer36",
//     area: "Area36",
//     office: "Office36",
//     age: 41,
//   },
//   {
//     id: 37,
//     company: "Facebook",
//     tCategory: "fdbdf",
//     status: "Resolved",
//     customer: "Customer37",
//     area: "Area37",
//     office: "Office37",
//     age: 29,
//   },
//   {
//     id: 38,
//     company: "Apple",
//     tCategory: "fdbdf",
//     status: "Open",
//     customer: "Customer38",
//     area: "Area38",
//     office: "Office38",
//     age: 52,
//   },
//   {
//     id: 39,
//     company: "Amazon",
//     tCategory: "fdbdf",
//     status: "Closed",
//     customer: "Customer39",
//     area: "Area39",
//     office: "Office39",
//     age: 30,
//   },
//   {
//     id: 40,
//     company: "Netflix",
//     tCategory: "fdbdf",
//     status: "Pending",
//     customer: "Customer40",
//     area: "Area40",
//     office: "Office40",
//     age: 43,
//   },
// ];



const rows = [
  {
    id: 124345,
    status: "Open",
    company: "Digincon",
    customer_name: "John Doe",
    area: "New York",
    office: "Headquarters",
    ticket_category: "Technical Support",
    ticket_create_time: "2024-02-17T09:30:00",
  },
  {
    id: 234356,
    status: "Closed",
    company: "Google",
    customer_name: "Alice Smith",
    area: "Los Angeles",
    office: "West Coast Office",
    ticket_category: "Billing",
    ticket_create_time: "2024-02-16T14:45:00",
  },
  {
    id: 345567,
    status: "Pending",
    company: "Microsoft",
    customer_name: "Bob Johnson",
    area: "Chicago",
    office: "Midwest Office",
    ticket_category: "Account Management",
    ticket_create_time: "2024-02-15T10:20:00",
  },
  {
    id: 435678,
    status: "Resolved",
    company: "Apple",
    customer_name: "Emily Brown",
    area: "San Francisco",
    office: "Apple Park",
    ticket_category: "Product Support",
    ticket_create_time: "2024-02-14T16:55:00",
  },
  {
    id: 565789,
    status: "Open",
    company: "Amazon",
    customer_name: "Michael Wilson",
    area: "Seattle",
    office: "Amazon HQ",
    ticket_category: "Shipping",
    ticket_create_time: "2024-02-13T11:10:00",
  },
  {
    id: 678890,
    status: "Closed",
    company: "Facebook",
    customer_name: "Sarah Jones",
    area: "Menlo Park",
    office: "Facebook Campus",
    ticket_category: "User Support",
    ticket_create_time: "2024-02-12T13:25:00",
  },
  {
    id: 783901,
    status: "Pending",
    company: "Twitter",
    customer_name: "David Martinez",
    area: "San Francisco",
    office: "Twitter HQ",
    ticket_category: "Technical Issue",
    ticket_create_time: "2024-02-11T08:40:00",
  },
  {
    id: 890172,
    status: "Resolved",
    company: "LinkedIn",
    customer_name: "Jennifer Lee",
    area: "Mountain View",
    office: "LinkedIn Campus",
    ticket_category: "Networking",
    ticket_create_time: "2024-02-10T12:15:00",
  },
  {
    id: 905123,
    status: "Open",
    company: "Snapchat",
    customer_name: "Matthew Taylor",
    area: "Los Angeles",
    office: "Snapchat HQ",
    ticket_category: "Privacy Concern",
    ticket_create_time: "2024-02-09T09:50:00",
  },
  {
    id: 101511,
    status: "Closed",
    company: "Netflix",
    customer_name: "Emma Davis",
    area: "Los Gatos",
    office: "Netflix Campus",
    ticket_category: "Content Inquiry",
    ticket_create_time: "2024-02-08T14:05:00",
  },
  {
    id: 118223,
    status: "Pending",
    company: "Uber",
    customer_name: "Christopher Wilson",
    area: "San Francisco",
    office: "Uber HQ",
    ticket_category: "Driver Support",
    ticket_create_time: "2024-02-07T11:30:00",
  },
  {
    id: 223334,
    status: "Resolved",
    company: "Airbnb",
    customer_name: "Jessica Taylor",
    area: "San Francisco",
    office: "Airbnb HQ",
    ticket_category: "Accommodation Issue",
    ticket_create_time: "2024-02-06T15:45:00",
  },
  {
    id: 334435,
    status: "Open",
    company: "Tesla",
    customer_name: "Michael Anderson",
    area: "Palo Alto",
    office: "Tesla Factory",
    ticket_category: "Product Inquiry",
    ticket_create_time: "2024-02-05T10:00:00",
  },
  {
    id: 442556,
    status: "Closed",
    company: "SpaceX",
    customer_name: "Sophia Rodriguez",
    area: "Hawthorne",
    office: "SpaceX Headquarters",
    ticket_category: "Launch Schedule",
    ticket_create_time: "2024-02-04T13:15:00",
  },
  {
    id: 551667,
    status: "Pending",
    company: "Alibaba",
    customer_name: "James Brown",
    area: "Hangzhou",
    office: "Alibaba Campus",
    ticket_category: "E-commerce",
    ticket_create_time: "2024-02-03T08:30:00",
  },
  {
    id: 666778,
    status: "Resolved",
    company: "Tencent",
    customer_name: "Olivia Wilson",
    area: "Shenzhen",
    office: "Tencent Tower",
    ticket_category: "Gaming",
    ticket_create_time: "2024-02-02T12:45:00",
  },
  {
    id: 778289,
    status: "Open",
    company: "Samsung",
    customer_name: "William Johnson",
    area: "Seoul",
    office: "Samsung HQ",
    ticket_category: "Electronics",
    ticket_create_time: "2024-02-01T09:00:00",
  },
  {
    id: 882990,
    status: "Closed",
    company: "Sony",
    customer_name: "Elizabeth Lee",
    area: "Tokyo",
    office: "Sony Headquarters",
    ticket_category: "Entertainment",
    ticket_create_time: "2024-01-31T14:25:00",
  },
  {
    id: 994001,
    status: "Pending",
    company: "LG",
    customer_name: "Daniel Smith",
    area: "Seoul",
    office: "LG Campus",
    ticket_category: "Appliances",
    ticket_create_time: "2024-01-30T11:40:00",
  },
  {
    id: 100112,
    status: "Resolved",
    company: "Panasonic",
    customer_name: "Ava Brown",
    area: "Osaka",
    office: "Panasonic Office",
    ticket_category: "Customer Service",
    ticket_create_time: "2024-01-29T15:55:00",
  }
];

const columns = [
  {
    field: "id",
    headerName: "Ticket ID",
    // width: 90,
    renderCell: (params) =><TicketId {...{params}}/>,
    type:'actions'
  },
  {
    field: "status",
    headerName: "Status",
    minWidth: 130,
    renderCell: (params) => <TableStatusColumn {...{ params }} />,
  },
  { field: "company", headerName: "Company",
  //  width: 80 
  },
  { field: "customer_name", headerName: "Customer Name", 
  // width: 150
 },
  { field: "area", headerName: "Area",
  //  width: 120
   },
  { field: "office", headerName: "Office", 
  // width: 120
 },
  { field: "ticket_category", headerName: "Ticket Category",
  //  width: 140
   },
  {
    field: "ticket_create_time",
    headerName: "Ticket Create Time",
    editable: true,
    align: "left",
    headerAlign: "left",
    // width: 170,
    // type: "dateTime"
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
    <div style={{ height: 600, width: "100%" , overflow: "auto",}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        slots={{
          toolbar: GridToolbar,
        }}
        checkboxSelection
        
       
      />
    </div>
  );
}
