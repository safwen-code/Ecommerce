import React, { useState } from 'react'
import {
  Modal,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material'

const AddReview = ({
  rating,
  comment,
  setrating,
  setcomment,
  submitHandler,
}) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    submitHandler()
    handleClose()
  }

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Leave a Review
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: '80%', md: '50%' }, // Responsive width for different screen sizes
            bgcolor: 'background.paper',
            borderRadius: '12px',
            boxShadow: 24,
            p: { xs: 2, sm: 3, md: 4 }, // Adjusted padding
            mx: 'auto', // Ensure equal margins on both left and right
            maxWidth: '600px', // Max width for larger screens
            border: '1px solid rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography
            variant="h6"
            component="h2"
            mb={2}
            align="center"
            sx={{
              fontWeight: '600',
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
              color: 'primary.main',
            }}
          >
            Submit Your Review
          </Typography>

          <form onSubmit={handleSubmit}>
            <FormControl fullWidth margin="normal" sx={{ mb: 2 }}>
              <InputLabel id="rating-label">Rating</InputLabel>
              <Select
                labelId="rating-label"
                id="rating"
                value={rating}
                label="Rating"
                onChange={(e) => setrating(e.target.value)}
                sx={{
                  bgcolor: 'background.paper',
                  borderRadius: '4px',
                }}
              >
                <MenuItem value="">
                  <em>Select a rating</em>
                </MenuItem>
                <MenuItem value={1}>1 — Poor</MenuItem>
                <MenuItem value={2}>2 — Fair</MenuItem>
                <MenuItem value={3}>3 — Good</MenuItem>
                <MenuItem value={4}>4 — Very Good</MenuItem>
                <MenuItem value={5}>5 — Excellent</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth margin="normal" sx={{ mb: 2 }}>
              <TextField
                id="comment"
                label="Comment"
                multiline
                rows={4}
                value={comment}
                onChange={(e) => setcomment(e.target.value)}
                variant="outlined"
                sx={{
                  bgcolor: '#f9f9f9',
                  borderRadius: '4px',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(0, 0, 0, 0.1)', // Softer border color
                    },
                  },
                }}
              />
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                mt: 2,
                py: 1.5,
                fontSize: { xs: '0.875rem', md: '1rem' }, // Responsive font size for the button
                fontWeight: 'bold',
                boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)', // Button shadow
              }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  )
}

export default AddReview
