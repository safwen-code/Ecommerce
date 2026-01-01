import { useState } from 'react'
import {
  Container,
  TextField,
  Typography,
  Box,
  Button,
  FormControlLabel,
  Checkbox,
} from '@mui/material'
import { users } from '../../utils/data'

const UserUpdate = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('update user')
  }

  return (
    <Container maxWidth="sm">
      <Button variant="contained" color="primary">
        Go Back
      </Button>
      <Box
        component="form"
        onSubmit={submitHandler}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 8,
        }}
      >
        <Typography component="h1" variant="h5">
          Edit User
        </Typography>
        {users[0] ? (
          <>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isAdmin}
                  onChange={(e) => setIsAdmin(e.target.checked)}
                  color="primary"
                />
              }
              label="Admin"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Edit User
            </Button>
          </>
        ) : (
          'hi '
        )}
      </Box>
    </Container>
  )
}

export default UserUpdate
