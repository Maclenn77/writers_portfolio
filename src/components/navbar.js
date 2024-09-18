import React from "react";
import { Navbar as Navb, Nav } from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/LinkContainer";

const Navbar = () => (
  <Navb bg="light" expand="lg" className="border-bottom mb-3">
  <LinkContainer to="/">
<Navb.Brand className='mx-5'>Resume</Navb.Brand>
</LinkContainer>
<Navb.Toggle aria-controls="basic-Navb-nav" />
<Navb.Collapse id="basic-Navb-nav">
<Nav className="mr-auto">
<LinkContainer to="/portfolio">
<Nav.Link>Portfolio</Nav.Link>
</LinkContainer>
<LinkContainer to="/about">
<Nav.Link>About me</Nav.Link>
</LinkContainer>
</Nav>
</Navb.Collapse>
</Navb>
);

export default Navbar;