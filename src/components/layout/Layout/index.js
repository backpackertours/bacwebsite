import React from 'react';
import { Outlet } from "react-router-dom";

import Footer from '../Footer';
import Navigation from '../Navigation';

const Layout = () => {
    return (
        <>
            <Navigation expand="md" horizontal="end" />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout