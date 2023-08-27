import { Button, Modal, ModalBody } from 'reactstrap';

import ShareLink from '../BottomDrawer/ShareLink.js';
import QueryFormBody from '../BottomDrawer/QueryFormBody.js';

const ShareModal = ({ modal, toggle, body }) => {
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalBody className="p-4">
                    <div className="text-end">
                        <Button outline color="dark" onClick={toggle}>
                            <i class="bi bi-x-lg"></i>
                        </Button>
                    </div>
                    {body === "sharelink" ? <ShareLink /> : <QueryFormBody />}
                </ModalBody>
            </Modal>
        </div>
    );
}

export default ShareModal;