// /admin part
//prd/:idprd/edit
import { useState } from 'react'
import {
  Container,
  TextField,
  Typography,
  Box,
  Button,
  Grid,
  Paper,
} from '@mui/material'

const ProductEditScreen = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [countInStock, setCountInStock] = useState('')
  const [description, setDescription] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <Container maxWidth="md">
      <Button variant="outlined" sx={{ mb: 2 }}>
        Go Back
      </Button>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Edit Product
        </Typography>

        <Box component="form" onSubmit={submitHandler}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Name"
                fullWidth
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Price"
                type="number"
                fullWidth
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Image URL"
                fullWidth
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <Button component="label" sx={{ mt: 1 }}>
                Upload Image
                <input type="file" hidden />
              </Button>
              {/* {uploading && <Loader />} */}
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Brand"
                fullWidth
                required
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Category"
                fullWidth
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Count In Stock"
                type="number"
                fullWidth
                required
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Description"
                multiline
                rows={4}
                fullWidth
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth size="large">
                Update Product
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  )
}

export default ProductEditScreen
