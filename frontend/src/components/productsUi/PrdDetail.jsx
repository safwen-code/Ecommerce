import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  Paper,
  Divider,
  Rating,
  Select,
  MenuItem,
  FormControl,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'

import { products } from '../../utils/data'
import { useState } from 'react'
import AddReview from './AddReview'

// import AddReviews from './AddReviews'

const PrdDetail = () => {
  const [qty, setQty] = useState(0)

  const addToCartHandler = () => {
    // add to card
  }

  //   const submitHandler = () => {
  //     // create review in prd
  //   }

  return (
    <Container sx={{ mt: 2 }}>
      <Button variant="outlined" sx={{ mb: 2 }}>
        Go Back
      </Button>

      {/* PRODUCT SECTION */}
      <Grid container spacing={3}>
        {/* IMAGE */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="320"
              image={products[0].image}
              alt={products[0].name}
            />
          </Card>
        </Grid>

        {/* DETAILS */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">{products[0].name}</Typography>
              <Divider sx={{ my: 1 }} />

              <Box display="flex" alignItems="center">
                <Rating value={products[0].rating || 0} readOnly />
                <Typography sx={{ ml: 1 }}>
                  {products[0].numReviews} reviews
                </Typography>
              </Box>

              <Divider sx={{ my: 1 }} />
              <Typography variant="h6">Price: ${products[0].price}</Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body2">{products[0].description}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* ACTIONS */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Price: ${products[0].price}</Typography>
            <Divider sx={{ my: 1 }} />

            <Typography>
              Status:{' '}
              {products[0].countInStock > 0 ? 'In Stock' : 'Out of Stock'}
            </Typography>

            {products[0].countInStock > 0 && (
              <Box display="flex" alignItems="center" mt={2}>
                <Typography sx={{ mr: 2 }}>Qty</Typography>
                <FormControl fullWidth>
                  <Select value={qty} onChange={(e) => setQty(e.target.value)}>
                    {[...Array(products[0].countInStock).keys()].map((x) => (
                      <MenuItem key={x + 1} value={x + 1}>
                        {x + 1}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            )}

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 2 }}
              disabled={products[0].countInStock === 0}
              onClick={addToCartHandler}
            >
              Add To Cart
            </Button>
          </Paper>
        </Grid>
      </Grid>

      {/* REVIEWS */}
      <Grid container spacing={2} mt={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Typography variant="h4" gutterBottom>
            Reviews
          </Typography>
          {products[0].reviews.length == 0 ? (
            <Message variant="error">No reviews</Message>
          ) : (
            <List>
              {products[0].reviews.map((review) => (
                <>
                  <ListItem
                    key={review._id}
                    alignItems="flex-start"
                    sx={{ mb: 2 }}
                  >
                    <ListItemText
                      primary={
                        <Box display="flex" flexDirection="column">
                          <Typography variant="h6" component="span">
                            {review.name}
                          </Typography>
                          <Box display="flex" alignItems="center" mt={0.5}>
                            <Rating value={review.rating} readOnly />
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{ ml: 1 }}
                            >
                              {review.createdAt.substring(0, 10)}
                            </Typography>
                          </Box>
                        </Box>
                      }
                      secondary={
                        <Typography component="p" sx={{ mt: 1 }}>
                          {review.comment}
                        </Typography>
                      }
                    />
                  </ListItem>
                </>
              ))}
            </List>
          )}
        </Grid>

        <Grid item xs={12} md={4} lg={3}>
          <Box>
            <Typography variant="h5" gutterBottom>
              Write a Customer Review
            </Typography>
            {/* add review */}
            {/* <AddReview /> */}
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default PrdDetail
