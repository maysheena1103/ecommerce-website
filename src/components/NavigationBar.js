import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";


export const NavigationBar = () => (
  <Navbar bg="white" expand="lg" fixed="top" className="navbar-embossed">
    <Container>
      <Navbar.Brand href="/">KADIE</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justyfy-content-end">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link className="propClone" href="/Home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="propClone" href="/Shop">Shop</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="propClone" href="/Product">Product</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="propClone" href="/Checkout">Checkout</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="propClone" href="/Contact">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

/*

<!-- HEADER =============================-->
<header class="item header margin-top-0">
<div class="wrapper">
  <nav role="navigation" class="navbar navbar-white navbar-embossed navbar-lg navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button data-target="#navbar-collapse-02" data-toggle="collapse" class="navbar-toggle" type="button">
      <i class="fa fa-bars"></i>
      <span class="sr-only">Toggle navigation</span>
      </button>
      <a href="index.html" class="navbar-brand brand"> SCORILO </a>
    </div>
    <div id="navbar-collapse-02" class="collapse navbar-collapse">
      <ul class="nav navbar-nav navbar-right">
        <li class="propClone"><a href="index.html">Home</a></li>
        <li class="propClone"><a href="shop.html">Shop</a></li>
        <li class="propClone"><a href="product.html">Product</a></li>
        <li class="propClone"><a href="checkout.html">Checkout</a></li>
        <li class="propClone"><a href="contact.html">Contact</a></li>
      </ul>
    </div>
  </div>
  </nav>
  
</div>
</header>*/