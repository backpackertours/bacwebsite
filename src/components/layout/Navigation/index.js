import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';

const Navigation = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="container-fluid py-2 px-5 bg-light">
            <Navbar {...args}>
                <NavbarBrand href="/">Backapcker Tours</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto text-muted" navbar>
                        <NavItem className="me-4">
                            <Link className="nav-link" to="/">Home</Link>
                        </NavItem>
                        <NavItem className="me-4">
                            <Link className="nav-link" to="/trip">About</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/trip">Contact Us</Link>
                        </NavItem>
                        {/* TODO - Remove dropdown if not needed */}
                        {/* <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Option 1</DropdownItem>
                                <DropdownItem>Option 2</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Reset</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown> */}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;