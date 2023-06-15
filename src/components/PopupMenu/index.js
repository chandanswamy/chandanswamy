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
import {FiMenu} from 'react-icons/fi'

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
        {['Login or Sign-Up', 'Dark Theme'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={styles.listItemButton}>
              <ListItemIcon>
                {index % 2 === 0 ? <LoginIcon /> : <DarkModeIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key="bottom">
        <Button sx={styles.button} onClick={toggleDrawer('bottom', true)} className='nav-bar-menu-button'>
          <FiMenu className='nav-bar-icon'/>
        </Button>
        <SwipeableDrawer
          anchor="bottom"
          open={state.bottom}
          onClose={toggleDrawer('bottom', false)}
          onOpen={toggleDrawer('bottom', true)}
        >
          {list('bottom')}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}