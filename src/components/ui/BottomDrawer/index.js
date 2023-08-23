import React, { useState } from 'react';
import { Button } from 'reactstrap';
// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'

import PriceBody from './PriceBody';
import QueryFormBody from './QueryFormBody';

const BottomDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [body, setBody] = useState("");
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const handleShowPrices = () => {
        setBody("ShowPrices");
        setIsOpen(true);
    }

    const handleSendQueries = () => {
        setBody("SendQueries");
        setIsOpen(true);
    }

    const handleDrawerClose = () => {
        setIsOpen(false);
    }
    return (
        <section className="d-md-none">
            <div className="container-fluid py-2 bg-white fixed-bottom d-flex gap-3 border border-top">
                <Button color="success" size="sm" onClick={handleDrawerClose}><i class="bi bi-whatsapp"></i></Button>
                <Button color="primary" outline size="sm" onClick={handleShowPrices}><i class="bi bi-currency-rupee"></i> Show Prices</Button>
                <Button color="primary" size="sm" onClick={handleSendQueries}><i class="bi bi-list-check"></i> Send Queries</Button>

            </div>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='bottom'
                className='border-top h-auto px-3 py-4 mb-4 rounded-top-4'
            >
                {body === "ShowPrices" ? <PriceBody /> : <QueryFormBody />}
            </Drawer>
        </section>
    )
}

export default BottomDrawer;