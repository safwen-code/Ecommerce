import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { products } from '../utils/data'
import Product from './productsUi/Product'

const HomeScreen = () => {
  return (
    <Box sx={{ minHeight: '100vh', py: 2 }}>
      <Container sx={{ mb: 3 }}>
        <Button to="/" variant="contained">
          Go Back
        </Button>
      </Container>

      <Container maxWidth="xl">
        <Typography
          variant="h3"
          align="center"
          sx={{
            my: 4,
            fontWeight: 'bold',
            fontSize: {
              xs: '26px',
              sm: '32px',
              md: '38px',
            },
            letterSpacing: 1,
          }}
        >
          Latest Products
        </Typography>

        <Grid container spacing={3}>
          {products ? (
            products.map((product) => (
              <Grid
                item
                key={product._id}
                xs={12} // mobile
                sm={6} // tablet
                md={4} // small laptop
                lg={3} // large screen
              >
                {/* createprod */}
                <Product product={product} />
              </Grid>
            ))
          ) : (
            <h1>hi</h1>
          )}
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeScreen
