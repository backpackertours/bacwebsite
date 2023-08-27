import React, { useState } from 'react';
import { Button } from 'reactstrap';
// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'

import PriceBody from './PriceBody';
import QueryFormBody from './QueryFormBody';
import ShareLink from './ShareLink';

const BottomDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [body, setBody] = useState("");

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const handleShare = () => {
        setBody("share");
        setIsOpen(true);
    }

    const handleShowPrices = () => {
        setBody("prices");
        setIsOpen(true);
    }

    const handleSendQueries = () => {
        setBody("queryform");
        setIsOpen(true);
    }

    return (
        <section className="d-md-none">
            <div className="container-fluid py-2 bg-white fixed-bottom d-flex gap-3 border border-top">
                <Button
                    className={body !== "share" && "bg-outline"}
                    color="primary"
                    size="md"
                    onClick={handleShare}>
                    <i class="bi bi-share-fill"></i> Share
                </Button>
                <Button
                    className={body !== "prices" && "bg-outline"}
                    color="primary"
                    size="md"
                    onClick={handleShowPrices}>
                    <i class="bi bi-currency-rupee"></i> Show Prices
                </Button>
                <Button
                    className={body !== "queryform" && "bg-outline"}
                    color="primary"
                    size="md"
                    onClick={handleSendQueries}>
                    <i class="bi bi-list-check"></i> Send Queries
                </Button>
            </div>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="bottom"
                className="h-auto p-4 mb-drawer rounded-top-4"
            >
                {body === "share" && <ShareLink />}
                {body === "prices" && <PriceBody />}
                {body === "queryform" && <QueryFormBody />}
            </Drawer>
        </section >
    )
}

export default BottomDrawer;