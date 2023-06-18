import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LoginIcon from '@mui/icons-material/Login';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Home from '@mui/icons-material/Home'
import Avatar from '@mui/material/Avatar';
import {FiMenu} from 'react-icons/fi'
import { Link } from 'react-router-dom';

import './index.css'

const styles = {
  button: {
    outline: 'none',
    color: '#000000'
  },
  listItemButton: {
    '&:focus': {
      backgroundColor: 'transparent', 
    },
  },
};

const listData = [
  {
    text: 'Home',
    iconName: <Home />,
    linkPath: '/'
  },
  {
    text: 'Profile',
    imageUrl: "https://res.cloudinary.com/chandanswamy/image/upload/v1686863084/image-100x100_yf3ghp.png",
    linkPath: '/profile'
  },
  {
    text: 'Login or Sign-Up',
    iconName: <LoginIcon />,
    linkPath: '/'
  },
  {
    text: 'Dark Theme',
    iconName: <DarkModeIcon />
  }
];



export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };



  const list = (anchor) => (
    <Box
      sx={{
        width: 'auto',
        borderTopLeftRadius: '16px',
        borderTopRightRadius: '16px',
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {listData.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton sx={styles.listItemButton} component={item.linkPath ? Link : 'button'} to={item.linkPath}>
              {item.imageUrl ? (
                <div className='image-container'>
                  <Avatar sx={{width: '24px', height: '24px'}} src={item.imageUrl} alt={item.text} />
                </div>
              ) : (
                <ListItemIcon>
                  {item.iconName}
                </ListItemIcon>
              )}
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
  const anchor = isSmallScreen ? 'bottom' : 'right';

  return (
    <div>
      <React.Fragment key={anchor} >
        <Button sx={styles.button} onClick={toggleDrawer(anchor, true)} className='nav-bar-menu-button'>
          <FiMenu className='nav-bar-icon'/>
        </Button>
        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
        >
          {list(anchor)}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}