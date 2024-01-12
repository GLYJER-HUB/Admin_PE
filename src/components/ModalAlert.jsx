import Alert from '@mui/material/Alert';
import { useEffect } from 'react';
import useModalAlertStore from '../store/modalAlertStore';

const ModalAlert = () => {
    const { modalAlert, clearModalAlert } = useModalAlertStore();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            clearModalAlert();
        }, 4000);

        return () => clearTimeout(timeoutId);
    }, [modalAlert, clearModalAlert]);

    if (!modalAlert.message || !modalAlert.type) {
        return null;
    }

    return (
        <Alert
            sx={{
                width: '75%',
                margin: 'auto',
            }}
            severity={modalAlert.type} onClose={clearModalAlert}>
            {modalAlert.message}
        </Alert>
    )
}

export default ModalAlert