import { useContext } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AuthContext from '../auth'
import { Alert} from "@mui/material";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MUIAlertModal() {
    //const { store } = useContext(GlobalStoreContext);
    const { auth } = useContext(AuthContext);
    const [open, setOpen] = React.useState(auth.message !== null);
    const handleClose = () => {
        setOpen(false);
        auth.setNullMessage();
    }
    return (
        <Modal
            open={open}
        >
            <Box sx={style}>
            <Alert severity="info" onClose={handleClose}>{auth.message}</Alert>
            </Box>
        </Modal>
    );
}