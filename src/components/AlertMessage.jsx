import Alert from '@mui/material/Alert';
import useAlertStore from '../store/alertStore';

const AlertMessage = () => {
    const { alert, clearAlert } = useAlertStore();

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