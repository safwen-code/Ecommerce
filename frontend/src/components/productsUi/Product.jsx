import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Box,
} from '@mui/material'

const Product = ({ product }) => {
  console.log(product)
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        boxShadow: 3,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6,
        },
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{
          height: { xs: 180, sm: 200 },
          objectFit: 'cover',
        }}
      />

      {/* Content */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          textAlign: 'center',
        }}
      >
        {/* Name */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            mb: 1,
            '&:hover': { color: 'secondary.main' },
          }}
          noWrap
        >
          {product.name}
        </Typography>
        {/* Rating */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 1,
          }}
        >
          <Rating
            value={product.rating}
            precision={0.5}
            readOnly
            size="small"
          />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            {product.numReviews}
          </Typography>
        </Box>

        {/* Price */}
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          ${product.price}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Product
