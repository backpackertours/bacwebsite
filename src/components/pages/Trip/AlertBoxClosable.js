import { useState } from 'react';
import { Alert } from 'reactstrap';

const AlertBoxClosable = ({ icon, text }) => {
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);

    console.log('alertbox visibility', visible);

    return (
        <Alert className="border-0 rounded-0 bg-primary text-white text-center mb-0" isOpen={visible} toggle={onDismiss}>
            <i className={`bi bi-${icon} pe-1`}></i> {text}
        </Alert>
    );
}

export default AlertBoxClosable;