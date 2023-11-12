import { useState } from 'react';
import { Row } from 'reactstrap';

import Drawer from 'react-modern-drawer';
import QueryFormBody from './QueryFormBody';
import PriceBody from './PriceBody';
import ShareLink from './ShareLink';
import BottomDrawerButton from './BottomDrawerButton';

import 'react-modern-drawer/dist/index.css';

const BottomDrawer = ({ trip }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [body, setBody] = useState("");

    // Toggle the drawer state
    const toggleDrawer = () => {
        setIsOpen(prevState => !prevState)
    }

    // Set passed drawer body on bottom menu click
    const handleSetDrawerBody = (bodyType) => {
        setBody(bodyType);
        setIsOpen(true);
    }

    // expand trip
    const { category, price_breakup, price_extras, discount } = trip

    // Drawer body tyes
    const SHARE = "SHARE";
    const PRICING = "PRICING";
    const ENQUIRY = "ENQUIRY";

    const buttons = [
        {
            type: SHARE,
            icon: "share"
        },
        {
            type: PRICING,
            icon: "wallet"
        },
        {
            type: ENQUIRY,
            icon: "send"
        }
    ]

    const buttonList = buttons.map((button) => <BottomDrawerButton body={body} type={button.type} icon={button.icon} isOpen={isOpen} handleSetDrawerBody={handleSetDrawerBody} />)

    return (
        <section className="d-md-none">
            <div className="container py-3 bg-white fixed-bottom border-top">
                <Row className="justify-content-center bottom-menu">
                    {buttonList}
                </Row>
            </div>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="bottom"
                className="h-auto p-4 rounded-top-4 mb-bottom"
            >
                {body === SHARE && <ShareLink />}
                {body === PRICING && <PriceBody category={category} price_breakup={price_breakup} price_extras={price_extras} discount={discount} />}
                {body === ENQUIRY && <QueryFormBody trip={trip} />}
            </Drawer>
        </section >
    )
}

export default BottomDrawer;