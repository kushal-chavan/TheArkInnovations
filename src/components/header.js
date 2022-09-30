import React, { useState } from "react"
import { Link } from "gatsby"
import logo from '../assets/images/logo.png'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "../assets/css/bootstrap.css"
import "../assets/css/style.scss";
// Data
import Industries from '../content/industry.json';
import ItSolutions from '../content/it-solutions.json';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [show, setShow] = useState(false)
  return (
    <div className="wrapper">
      <header className="header">
        <nav className="navbar navbar-expand-lg sticky-navbar">
          <div className="container">
            {/* <button type="button" className="action__btn action__btn-burgerMenu mr-30 d-none d-lg-block">
              <i className="icon-nav"></i>
            </button> */}
            <Link className="navbar-brand" to="/">
              <img width="150px" src={logo} alt="logo" style={{ padding: '5px 0px' }} />
            </Link>
            <button className={"navbar-toggler " + (mobileMenuOpen ? "actived" : "")} type="button" onClick={() => { setMobileMenuOpen(state => !state); setShow(false) }}>
              <span className="menu-lines"><span></span></span>
            </button>
            <div className={"collapse navbar-collapse " + (mobileMenuOpen ? "menu-opened" : "")} id="mainNavigation">
              <ul className="navbar-nav mr-auto ml-auto">
                <li className="nav__item">
                  <AniLink to="/" data-toggle="dropdown" className={"nav__item-link"} activeClassName="active">Home</AniLink>
                </li>
                <li className="nav__item">
                  <AniLink to="/about-us" className={"nav__item-link"} activeClassName="active">About Us</AniLink>
                </li>
                <li className="nav__item  has-dropdown">
                  <div data-toggle="dropdown" onClick={() => setShow(state => !state)} aria-expanded="false" style={{ cursor: 'pointer' }} className="dropdown-toggle nav__item-link">IT Solutions</div>
                  <ul className={"dropdown-menu wide-dropdown-menu " + (show ? "show" : "")}>
                    <li className="nav__item">
                      <div className="row mx-0">
                        <div className="col-sm-6 dropdown-menu-col">
                          <Link to="/" className="nav__item-link dropdown-menu-title">IT Solutions</Link>
                          <ul className="nav flex-column">
                            {
                              ItSolutions.filter(i => i.visible === true).map((item) => {
                                return <li className="nav__item"><Link className="nav__item-link" to={"/it-solutions/"+item.slug}>{item.name}</Link></li>
                              })
                            }
                          </ul>
                        </div>
                        <div className="col-sm-6 dropdown-menu-col">
                          <Link to="/" className="nav__item-link dropdown-menu-title">Industries</Link>
                          <ul className="nav flex-column">
                            {
                              Industries.map((item) => {
                                return <li key={item.slug} className="nav__item"><Link className="nav__item-link" to={'/service/' + item.slug}>{item.name}</Link></li>
                              })
                            }
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="nav__item">
                  <Link to="/services" className={"nav__item-link"} activeClassName="active">Services</Link>
                </li>
                <li className="nav__item">
                  <Link to="/career" className={"nav__item-link"} activeClassName="active">Career</Link>
                </li>
                <li className="nav__item">
                  <Link to="/contact" className={"nav__item-link"} activeClassName="active">Contacts</Link>
                </li>
              </ul>
            </div>
            <ul className="navbar-actions list-unstyled mb-0 d-flex align-items-center">
              {/* <li>
                <button className="action__btn action__btn-login open-login-popup">
                  <i className="icon-user"></i><span>Login</span>
                </button>
              </li> */}
              {/* <li className="d-none d-xl-block">
                <Link to="/" className="btn btn__primary btn__primary-style2 btn_ action__btn-contact">Request
                A Quote</Link>
              </li> */}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
