import { Alert } from 'reactstrap';

const EmailAlert = ({ type }) => {
    const isError = type === "error"

    return (
        <Alert className="border-0 mt-3" color={isError ? "danger" : type}>
            <i className={`bi bi-${isError ? "exclamation-octagon" : "check2"} pe-1`}></i> <small>{isError ? "Error: Failed to send the email." : "Email Sent Successfully!"}</small>
        </Alert>
    )
}

export default EmailAlert