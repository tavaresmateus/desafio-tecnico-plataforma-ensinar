import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';


const style = {
  position: 'absolute',
  top:0,
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "50%",
  bgcolor: 'background.paper',
  border: '1px solid gray',
  boxShadow: 24,
  p: 4,

};


export default function ModalAluno(props: { open: boolean; handleClose: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined; children: React.ReactElement<any, any>; }) {


  return (
    <div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        sx={{display:"flex", padding:0}}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={props.open} style={{marginTop:300, display:"flex"}}>
          <Box sx={style}>
          {props.children}
          </Box>
          
        </Fade>
      </Modal>
    </div>
  );
}