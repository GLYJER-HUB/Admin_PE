import Alert from '@mui/material/Alert';
import useAlertStore from '../store/alertStore';
import { useEffect } from 'react';

const AlertMessage = () => {
    const { alert, clearAlert } = useAlertStore();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            clearAlert();
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, [alert, clearAlert]);

    if (!alert.message || !alert.type) {
        return null;
    }

    return (
        <Alert severity={alert.type} onClose={clearAlert}>
            {alert.message}
        </Alert>
    )
}

export default AlertMessage