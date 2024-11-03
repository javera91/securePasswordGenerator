import React, { useRef, useState } from 'react';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface GeneratedPasswordProps {
    contrasena: string;
}

const GeneratedPassword: React.FC<GeneratedPasswordProps> = ({ contrasena }) => {
    const [open, setOpen] = useState(false); // Estado para controlar la visibilidad del Alert
    const contrasenaRef = useRef<HTMLInputElement>(null);
    const copiarContrasena = () => { 
        if (contrasenaRef.current) {
            contrasenaRef.current.select();
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
                message="La contraseña ha sido guardada en el portapapeles."
                action={action}
                anchorOrigin={{ vertical:'top', horizontal:'center' }}
            />
            <h2>Contraseña Generada</h2>
            <input type="text" value={contrasena} readOnly ref={contrasenaRef} />
            <button onClick={copiarContrasena}>Copiar</button>
        </div>
    );
};
export default GeneratedPassword;
