import React from 'react'
import { orders } from '../../utils/data'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

const OrderList = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant={isMobile ? 'h6' : 'h4'} gutterBottom>
        Orders List
      </Typography>

      {/* ✅ TableContainer واحد فقط */}
      <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
        {/* ✅ Table */}
        <Table size="small" aria-label="orders list table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>USER</TableCell>
              <TableCell>DATE</TableCell>
              <TableCell>TOTAL PRICE</TableCell>
              <TableCell>PAID</TableCell>
              <TableCell>DELIVERED</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orders.map((order) => (
              <TableRow key={order._id}>
                <TableCell>{order._id}</TableCell>
                <TableCell>{order.user?.name}</TableCell>
                <TableCell>{order.createdAt.substring(0, 10)}</TableCell>
                <TableCell>${order.totalPrice}</TableCell>

                <TableCell>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <HighlightOffIcon sx={{ color: 'red' }} />
                  )}
                </TableCell>

                <TableCell>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <HighlightOffIcon sx={{ color: 'red' }} />
                  )}
                </TableCell>

                <TableCell>
                  <IconButton color="primary">Details</IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default OrderList
