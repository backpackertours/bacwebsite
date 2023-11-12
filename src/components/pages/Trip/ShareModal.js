import {
    Button,
    Modal,
    ModalBody
} from 'reactstrap';

import QueryFormBody from './QueryFormBody.js';
import ShareLink from './ShareLink.js';

const ShareModal = ({ modal, toggle, body, trip }) => {
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalBody className="p-4">
                    <div className="text-end">
                        <Button outline color="dark" onClick={toggle}>
                            <i className="bi bi-x-lg"></i>
                        </Button>
                    </div>
                    {body === "sharelink" ? <ShareLink /> : <QueryFormBody trip={trip} />}
                </ModalBody>
            </Modal>
        </div>
    );
}

export default ShareModal;