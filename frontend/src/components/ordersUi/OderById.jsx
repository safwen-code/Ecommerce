// /orders/:id
import React from 'react'
import { orders } from '../../utils/data'
import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Container,
} from '@mui/material'
const OderById = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, // Adjust font size for different screen sizes
          textAlign: 'center',
          padding: { xs: 1, sm: 2, md: 3 },
        }}
      >
        Order {orders[0]._id}
      </Typography>
      <Grid container spacing={3}>
        {/* Left Side: Order Details */}
        <Grid item xs={12} md={8}>
          {/* Shipping Details */}
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Shipping
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Name:</strong> {orders[0].user.name}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Email:</strong>{' '}
                <a
                  href={`mailto:${orders[0].user.email}`}
                  style={{ color: 'inherit' }}
                >
                  {orders[0].user.email}
                </a>
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Address:</strong> {orders[0].shippingAddress.address},{' '}
                {orders[0].shippingAddress.city},{' '}
                {orders[0].shippingAddress.postalCode},{' '}
                {orders[0].shippingAddress.country}
              </Typography>
              {orders[0].isDelivered ? (
                <Typography variant="success">
                  Delivered on {orders[0].deliveredAt}
                </Typography>
              ) : (
                <Typography variant="error">Not Delivered</Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default OderById
