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
  Grid,
  Box,
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import { users } from '../../utils/data'

const UsersList = () => {
  const deleteHandler = (id) => {
    console.log(id)
    if (window.confirm('Are you sure')) {
      console.log('delete Users')
    }
  }
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom align="center">
        User List
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TableContainer
            component={Paper}
            sx={{ maxWidth: '100%', overflowX: 'auto' }}
          >
            <Table size="small" aria-label="user list table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>NAME</TableCell>
                  <TableCell>EMAIL</TableCell>
                  <TableCell>ADMIN</TableCell>
                  <TableCell align="right">ACTIONS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell>{user._id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>
                      <a href={`mailto:${user.email}`}>{user.email}</a>
                    </TableCell>
                    <TableCell>
                      {user.isAdmin ? (
                        <CheckCircleIcon sx={{ color: 'green' }} />
                      ) : (
                        <HighlightOffIcon sx={{ color: 'red' }} />
                      )}
                    </TableCell>
                    <TableCell align="right">
                      <IconButton color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => deleteHandler(user._id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  )
}

export default UsersList
