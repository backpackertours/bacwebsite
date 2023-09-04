import React from 'react';
import { Outlet } from "react-router-dom";

import Footer from './Footer';
import Navigation from './Navigation';

const Layout = () => {
    return (
        <>
            <Navigation expand="md" horizontal="end" color="white" fixed="top" className="shadow-md border-bottom" />
            <div className="mt-nav">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout