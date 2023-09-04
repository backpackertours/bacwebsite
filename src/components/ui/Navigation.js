import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import logo from '../../assets/images/logo.png';

const Navigation = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar {...args}>
                <NavbarBrand href="/">
                    <img src={logo} alt="Backpacker Logo" style={{ width: "150px" }} />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem className="me-4">
                            <Link className="nav-link" to="/">Home</Link>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar className="me-4">
                            <DropdownToggle nav caret>
                                Upcoming Trips
                            </DropdownToggle>
                            <DropdownMenu center className="shadow-md">
                                <DropdownItem>
                                    <Link className="nav-link py-0" to="/trip">Spiti Valley Trek</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link className="nav-link py-0" to="/trip">Himachal Pradesh</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link className="nav-link py-0" to="/trip">Leh Ladakh</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link className="nav-link py-0" to="/trip">Meghalaya Paradise</Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar className="me-4">
                            <DropdownToggle nav caret>
                                Weekend Gateways
                            </DropdownToggle>
                            <DropdownMenu center className="shadow-md">
                                <DropdownItem>
                                    <Link className="nav-link py-0" to="/trip">Matheran Trek</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link className="nav-link py-0" to="/trip">Garbette Plateu</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link className="nav-link py-0" to="/trip">Mumbai Backwaters</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link className="nav-link py-0" to="/trip">Kalavantin Durg</Link>
                                </DropdownItem>
                                {/* <DropdownItem divider />
                                <DropdownItem>Reset</DropdownItem> */}
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem className="me-4">
                            <Link className="nav-link" to="/aboutus">About Us</Link>
                        </NavItem>
                        <NavItem>
                            <Button className="text-white rounded-pill" color="primary">
                                <Link className="nav-link py-0 text-white" to="/contactus">Contact Us</Link>
                            </Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;