import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  Container,
  MenuItem,
  IconButton,
} from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { users, cart } from '../utils/data'

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const isCartFull = cart.cartItems.length > 0

  const logoutHandler = () => {
    console.log('logout')
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo and search box for larger screens */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              flexGrow: 1,
            }}
          >
            <AdbIcon sx={{ mr: 1 }} />
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  mr: 2,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                }}
              >
                LOGO
              </Typography>
            </Link>
          </Box>

          {/* Search box for larger screens */}

          {/* Logo for mobile screens */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              alignItems: 'center',
            }}
          >
            <AdbIcon sx={{ mr: 1 }} />
          </Box>

          {/* Search box in the center for mobile screens */}

          {/* Cart icon and user menu */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-end' },
            }}
          >
            <MenuItem>
              <Link
                to="/cart"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <ShoppingCartIcon
                  sx={{ color: isCartFull ? '#FFD700' : 'white' }}
                />
              </Link>
            </MenuItem>

            {users[0] ? (
              <>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Typography sx={{ color: 'whitesmoke' }}>
                    {users[0].name}
                  </Typography>
                </IconButton>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link
                      to="/user/profile"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <Typography textAlign="center">Profile</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleCloseUserMenu()
                      logoutHandler()
                    }}
                  >
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <MenuItem>
                <Link
                  to="/login"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Typography textAlign="center">Login</Typography>
                </Link>
              </MenuItem>
            )}
            {users[0] && users[0].isAdmin && (
              <>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link
                      to="/admin/ListUser"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <Typography textAlign="center">List Users</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link
                      to="/admin/ListPrd"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <Typography textAlign="center">Products</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link
                      to="/admin/ListOrder"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <Typography textAlign="center">List Orders</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleCloseUserMenu()
                      logoutHandler()
                    }}
                  >
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
