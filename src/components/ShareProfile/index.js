import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import copy from "copy-to-clipboard";
import {AiOutlineLink} from 'react-icons/ai'

import './index.css'

const style = {
  position: 'relative',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '300px',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const copyProfileLink = () => {
    const text = "https://chandanswamy.onrender.com/";
    copy(text);
    alert("Hi there! Link Successfully Copied");
  }

  return (
    <>
      <Button onClick={handleOpen} sx={{
        color: '#1e160c',
        border: 'none',
        height: '32px',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
        fontWeight: 500,
        fontSize: '16px',
        backgroundColor: '#efefef',
        borderRadius: '8px',
        padding: '0px',
        flexGrow: 1
      }}>
        <button className='resume-portfolio-button' type='button' >
            Share Profile
        </button>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button sx={{ height: '64px', width: '42px', border: '1px solid #000000', borderRadius: '48%', marginRight: '8px'}} onClick={copyProfileLink}>
            <AiOutlineLink className='link-icon' />
          </Button>
          <Typography id="modal-modal-description" sx={{ margin: '14px', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif', fontWeight: 'bold',
        fontSize: '16px' }}>
            Copy Profile Link
          </Typography>
        </Box>
      </Modal>
    </>
  );
}