import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row } from './row';
import { useEffect } from 'react';
import { api } from '../../../services/api';
import { useState } from 'react';

export function Orders() {
  const [orders, setOrders] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('orders');

      setOrders(data);
      console.log(data);
    }
    loadOrders();
  }, []);

  useEffect(() => {
    const newRows = orders.map((order) => createData(order));

    setRows(newRows);
  }, [orders]);

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products,
    };
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Pedido</TableCell>
            <TableCell>Cliente</TableCell>
            <TableCell>Data do pedido</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row
              key={row.orderId}
              row={row}
              orders={orders}
              setOrders={setOrders}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
