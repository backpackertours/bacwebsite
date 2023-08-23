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

import logo from '../../../assets/images/logo.png';

const Navigation = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="container-fluid px-5">
            <Navbar {...args}>
                <NavbarBrand href="/">
                    <img src={logo} alt="Backpacker Logo" style={{ width: "150px" }} />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem className="me-5">
                            <Link className="nav-link" to="/">Home</Link>
                        </NavItem>
                        <NavItem className="me-5">
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