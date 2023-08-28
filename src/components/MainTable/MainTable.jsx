import "./MainTable.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { nanoid } from "nanoid";

function MainTable({darkMode}) {
  let random_name = require('node-random-name');
  const rows = [
    {
      id: nanoid(),
      product:"Xbox Core Wireless Controller",
      img: "https://m.media-amazon.com/images/I/51BkgKU6UxL._SL1400_.jpg",
      customer: random_name(),
      date: "3 mar",
      method: "cash on delivary",
      amount: 345,
      status:"approved"
    },
    {
      id: nanoid(),
      product:"BINNUNE Wireless Gaming Headset",
      img: "https://m.media-amazon.com/images/I/61GJQyjIIhL._AC_SL1500_.jpg",
      customer: random_name(),
      date: "14 feb",
      method: "online payment",
      amount: 256,
      status:"pending"
    },
    {
      id: nanoid(),
      product:"DualShock 4 Wireless Controller",
      img: "https://m.media-amazon.com/images/I/61IG46p-yHL._SL1500_.jpg",
      customer: random_name(),
      date: "8 aug",
      method: "cash on delivary",
      amount: 345,
      status:"approved"
    },
    {
      id: nanoid(),
      product:"Apple iPad (9th Generation)",
      img: "https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_SL1500_.jpg",
      customer: random_name(),
      date: "12 jul",
      method: "cash on delivary",
      amount: 345,
      status:"approved"
    },
    {
      id: nanoid(),
      product:"Apple 2020 MacBook Air Laptop",
      img: "https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SL1500_.jpg",
      customer: random_name(),
      date: "25 dec",
      method: "cash on delivary",
      amount: 345,
      status:"pending"
    },
    {
      id: nanoid(),
      product:"LG 65-Inch Class UQ7570 Series",
      img: "https://m.media-amazon.com/images/I/A1PAvbwPUxL._AC_SL1500_.jpg",
      customer: random_name(),
      date: "5 apr",
      method: "online payment",
      amount: 345,
      status:"approved"
    },
  ]
  return (
    <div className={darkMode?"mainTable dark":"mainTable"}>
      <TableContainer component={Paper} className="tableContainer">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="tcell">Tracking ID</TableCell>
            <TableCell className="tcell">Product</TableCell>
            <TableCell className="tcell">Customer</TableCell>
            <TableCell className="tcell">Date</TableCell>
            <TableCell className="tcell">Amount</TableCell>
            <TableCell className="tcell">Payment Method</TableCell>
            <TableCell className="tcell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}>
              <TableCell className="tcell">{row.id}</TableCell>
              <TableCell className="tcell">
                <div className="wrapper">
                  <img src={row.img} alt="" />
                  <span>{row.product}</span>
                </div>
                </TableCell>
              <TableCell className="tcell">{row.customer}</TableCell>
              <TableCell className="tcell">{row.date}</TableCell>
              <TableCell className="tcell">{row.amount}</TableCell>
              <TableCell className="tcell">{row.method}</TableCell>
              <TableCell className="tcell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default MainTable