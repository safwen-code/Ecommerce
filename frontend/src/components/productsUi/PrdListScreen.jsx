///admin/productlist
// "/admin/productlist/:pageNumber"
import {
  Box,
  Grid,
  Typography,
  Button,
  Paper,
  IconButton,
  Card,
  CardContent,
  Stack,
  useTheme,
  useMediaQuery,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { products } from '../../utils/data'

const ProductListScreen = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box p={2}>
      {/* HEADER */}
      <Grid container justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5">Products</Typography>
        <Button variant="contained" startIcon={<AddIcon />}>
          Create
        </Button>
      </Grid>

      {/* 🖥️ DESKTOP TABLE */}
      {!isMobile && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Brand</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((p) => (
                <TableRow key={p._id}>
                  <TableCell>{p._id}</TableCell>
                  <TableCell>{p.name}</TableCell>
                  <TableCell>${p.price}</TableCell>
                  <TableCell>{p.category}</TableCell>
                  <TableCell>{p.brand}</TableCell>
                  <TableCell>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                    <IconButton color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* 📱 MOBILE CARDS */}
      {isMobile && (
        <Stack spacing={2}>
          {products.map((p) => (
            <Card key={p._id}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">
                  {p.name}
                </Typography>
                <Typography>Price: ${p.price}</Typography>
                <Typography>Category: {p.category}</Typography>
                <Typography>Brand: {p.brand}</Typography>

                <Stack direction="row" spacing={1} mt={1}>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error">
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      )}
    </Box>
  )
}

export default ProductListScreen
