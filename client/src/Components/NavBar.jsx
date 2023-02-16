import React, {useContext} from 'react';
import AuthContext from '../Contexts/AuthContext';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from 'react-router-dom';

export default function MenuAppBar() {
  const history = useNavigate();
  const {user, handleLogout} = useContext(AuthContext);
  const [ anchorEl, setAnchorEl ] = React.useState(null);

  const logout = () => {
    handleClose();
    handleLogout();
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    handleClose();
    history("/auth/login");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Washington
          </Typography>
          {user ? 
          (
            <div>
              <IconButton
                onClick={handleMenu}
                color="inherit"
              >
                {user.name}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>PCU</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </div>
          )
          
          : 
          (
            <div>
              <IconButton
                onClick={handleLogin}
                color="inherit"
              >
                Login
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
