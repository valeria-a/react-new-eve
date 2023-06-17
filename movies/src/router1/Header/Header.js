import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link, NavLink } from 'react-router-dom';
import { Stack } from '@mui/material';
import './Header.css'

const Header = () => {
    return(

        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" marginRight={'1em'}>
                ROUTER DEMO
              </Typography>
              <Stack direction='row' spacing={2}>
                {/* <Link to='page1'>Page 1</Link>
                <Link to='page2'>Page 2</Link> */}
                <NavLink to='page1'>Page 1</NavLink>
                <NavLink to='page2'>Page 2</NavLink>
                <NavLink to='users'>Users</NavLink>
              </Stack>
            </Toolbar>
          </AppBar>
        </Box>

    )
}

export default Header;