import { useState } from 'react';
import { Row, Col, Input, Button } from 'reactstrap';

const CopyText = ({ pageUrl }) => {
    const [copystatus, setCopyStatus] = useState(false);

    const handleCopyPageURL = () => {
        setCopyStatus(true);
        navigator.clipboard.writeText(pageUrl);
    }

    return (
        <div className="px-3 mt-4">
            <Row>
                <Col xs="8" sm="8">
                    <Input type="text" value={pageUrl} id="myInput" />
                </Col>
                <Col xs="4" sm="4">
                    <Button className="bg-dark text-white border-0 w-100" onClick={handleCopyPageURL}>
                        <i class="bi bi-clipboard"></i> {copystatus ? "Copied" : "Copy"}
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default CopyText;