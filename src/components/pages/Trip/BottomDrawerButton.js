import { Col } from "reactstrap";

const BottomDrawerButton = ({ body, type, icon, isOpen, handleSetDrawerBody }) => {
    const typeCamelCase = type[0].toUpperCase() + type.slice(1).toLowerCase();
    const isActive = body === type && isOpen;
    return (
        <Col
            xs="3"
            sm="3"
            className={`text-center cursor-pointer ${isActive ? "text-primary" : ""}`}
            onClick={() => handleSetDrawerBody(type)}
        >
            <i className={`bi bi-${icon}${isActive ? "-fill" : ""}`}></i>
            <small className="d-block">{typeCamelCase}</small>
        </Col>
    )
}

export default BottomDrawerButton;