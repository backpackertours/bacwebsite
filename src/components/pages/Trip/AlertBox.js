import { Alert } from 'reactstrap';

const AlertBox = ({ icon, text }) => {
    return (
        <Alert className="border-0 mt-3" color="primary">
            <i className={`bi bi-${icon} pe-1`}></i> <small>{text}</small>
        </Alert>
    );
}

export default AlertBox;