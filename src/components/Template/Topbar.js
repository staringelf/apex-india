import React from 'react';
import Address from "./Address";
import Container from "./Container";

// Websites Navbar, displays routes defined in 'src/data/routes'
const Topbar = () => (
  
    <section className="topbar bg-primary-600 text-secondary" id="topbar">
      <Container>
        <Address></Address>
      </Container>
    </section>
);

export default Topbar;
