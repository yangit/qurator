import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import { Badge, Nav, Navbar, NavItem } from 'react-bootstrap'
import styles from './style'

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
        <Navbar className={styles.navBarMain}>
          <Navbar.Header className={styles.navBarHeader}>
            <Navbar.Brand>
              <Link to="/app" >
                <img src="/img/logo.jpg" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse className={styles.navBar}>
            <Nav className={styles.navBarMenu}>
              <LinkContainer to="/" >
                <NavItem>Home</NavItem>
              </LinkContainer>
              <LinkContainer to="/qurate" >
                <NavItem>Qurator</NavItem>
              </LinkContainer>
              <LinkContainer to="/shop" >
                <NavItem>Shop</NavItem>
              </LinkContainer>
              <LinkContainer to="/about" >
                <NavItem>About us</NavItem>
              </LinkContainer>
              <LinkContainer to="/contacts" >
                <NavItem>Contact</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight >
              <LinkContainer to="/cart" >
                <NavItem>
                  <i className={styles.shoppingCart} />
                  <Badge className={styles.badgeRed}>
                    {this.props.cartCount}
                  </Badge>
                </NavItem>
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
