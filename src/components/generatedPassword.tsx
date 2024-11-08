import React, { useRef, useState } from 'react';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface GeneratedPasswordProps {
    password: string;
}

const GeneratedPassword: React.FC<GeneratedPasswordProps> = ({ password }) => {
    const [open, setOpen] = useState(false); // Estado para controlar la visibilidad del Alert
    const passwordRef = useRef<HTMLInputElement>(null);
    const copypassword = () => { 
        if (passwordRef.current) {
            passwordRef.current.select();
            document.execCommand('copy');
            setOpen(true);
        }
    };
    const handleClose = (_event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };
    const action = (
        <React.Fragment>  
            
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );

     
    return (
        <div className='custom-container'>
             <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="The password has been saved in the clipboard."
                action={action}
                anchorOrigin={{ vertical:'top', horizontal:'center' }}
            />
            <h2>Generated Password</h2>
            <input type="text" value={password} readOnly ref={passwordRef} />
            <button onClick={copypassword}>Copy</button>
        </div>
    );
};
export default GeneratedPassword;
