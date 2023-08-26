import { Button, Modal, ModalBody } from 'reactstrap';

import ShareLink from '../BottomDrawer/ShareLink.js';

const ShareModal = ({ modal, toggle }) => {
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalBody>
                    <div className="text-end">
                        <Button outline color="dark" onClick={toggle}>
                            <i class="bi bi-x-lg"></i>
                        </Button>
                    </div>
                    <ShareLink />
                </ModalBody>
            </Modal>
        </div>
    );
}

export default ShareModal;