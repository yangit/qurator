import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, NavItem } from 'react-bootstrap'

const cartSelector = createStructuredSelector({
  cartCount: state => state.cart.reduce((sum, item) => sum + item.qty, 0),
})

@connect(cartSelector)
class QNavbar extends Component {
  static propTypes = {
    cartCount: PropTypes.number,
    routes: PropTypes.array,
  }

  render() {
    const { routes } = this.props
    const activeRouteName = routes[routes.length - 1].name

    return (
      <div>
        <Navbar inverse >
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/app" >
                <img src="/img/logo.jpg" />
                Qurator
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/app/shop" >
                <NavItem> Shop entire store</NavItem>
              </LinkContainer>
              <LinkContainer to="/app/contacts" >
                <NavItem>Contact us</NavItem>
              </LinkContainer>
              <LinkContainer to="/app/about" >
                <NavItem>About</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight >
              <LinkContainer to="/app/cart" >
                <NavItem>
                  <i className="fa fa-shopping-cart" /><span> </span>
                  Cart ({this.props.cartCount})</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {
          activeRouteName &&
          <div className="someClass">{activeRouteName}</div>
        }
      </div>
    )
  }
}

export default QNavbar
