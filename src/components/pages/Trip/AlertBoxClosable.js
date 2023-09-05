import { useState } from 'react';
import { Alert } from 'reactstrap';

const AlertBoxClosable = ({ icon, text }) => {
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);

    return (
        <Alert className="mb-5 border-0" color="primary" isOpen={visible} toggle={onDismiss}>
            <i className={`bi bi-${icon} pe-1`}></i> {text}
        </Alert>
    );
}

export default AlertBoxClosable;