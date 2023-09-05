import { Alert } from 'reactstrap';

const AlertBox = ({ icon, text }) => {
    return (
        <Alert className="border-0" color="primary">
            <i className={`bi bi-${icon} pe-1`}></i> {text}
        </Alert>
    );
}

export default AlertBox;