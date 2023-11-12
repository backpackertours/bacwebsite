import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import uuid4 from 'uuid4';

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
import tripsData from '../data/tripsData';

import logo from '../../assets/images/logo.png';

const Navigation = (args) => {
    const [link, setlink] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const handleLinkChange = (index) => {
        setlink(index)
        setIsOpen(false);
    }

    const upcoming = tripsData.filter((trip) => trip.category === "upcoming");
    const weekend = tripsData.filter((trip) => trip.category === "weekend");

    return (
        <div>
            <Navbar {...args}>
                <NavbarBrand href="/">
                    <img src={logo} alt="Backpacker Logo" style={{ width: "150px" }} />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem className="me-4 active">
                            <Link
                                className={`nav-link ${link === 1 ? "active" : ""}`}
                                to="/"
                                onClick={() => handleLinkChange(1)}
                            >
                                Home
                            </Link>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar className="me-4 hover-show">
                            <DropdownToggle nav caret>
                                Upcoming Trips
                            </DropdownToggle>
                            <DropdownMenu center="true" className="drop-shadow hover-show-menu rounded-4 border">
                                {
                                    upcoming.map(trip => (
                                        <DropdownItem key={uuid4()}>
                                            <Link className="nav-link py-0" to={`/trip/${trip.id}`} onClick={() => setIsOpen(false)}>{trip.menu_title}</Link>
                                        </DropdownItem>
                                    ))
                                }
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar className="me-4 hover-show">
                            <DropdownToggle nav caret>
                                Weekend Gateways
                            </DropdownToggle>
                            <DropdownMenu center="true" className="drop-shadow hover-show-menu rounded-4 border">
                                {
                                    weekend.map(trip => (
                                        <DropdownItem key={uuid4()}>
                                            <Link className="nav-link py-0" to={`/trip/${trip.id}`} onClick={() => setIsOpen(false)}>{trip.menu_title}</Link>
                                        </DropdownItem>
                                    ))
                                }
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem className="me-4">
                            <Link
                                className={`nav-link ${link === 2 ? "active" : ""}`}
                                to="/aboutus"
                                onClick={() => handleLinkChange(2)}
                            >
                                About Us
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Button className="button rounded-pill" color="primary" outline>
                                <Link
                                    className="nav-link py-0"
                                    to="/contactus"
                                    onClick={() => handleLinkChange(3)}
                                >Contact Us
                                </Link>
                            </Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );
}

export default Navigation;