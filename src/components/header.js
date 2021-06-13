import * as React from "react"
import { Link } from "gatsby"
import logo from '../assets/images/logo.png'
import "../assets/css/bootstrap.css"
import "../assets/css/style.scss";

const Header = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <nav className="navbar navbar-expand-lg sticky-navbar">
          <div className="container">
            <button type="button" className="action__btn action__btn-burgerMenu mr-30 d-none d-lg-block">
              <i className="icon-nav"></i>
            </button>
            <Link className="navbar-brand" to="/">
            <img width="200px" src={logo} alt="logo" style={{padding:'5px 0px'}}/>
            </Link>
            <button className="navbar-toggler" type="button">
              <span className="menu-lines"><span></span></span>
            </button>
            <div className="collapse navbar-collapse" id="mainNavigation">
              <ul className="navbar-nav mr-auto ml-auto">
                <li className="nav__item  has-dropdown">
                  <Link to="/" data-toggle="dropdown" className="dropdown-toggle nav__item-link active">Home</Link>
                  <ul className="dropdown-menu">
                    <li className="nav__item">
                      <Link to="/" className="nav__item-link">Home Main</Link>
                    </li>
                    <li className="nav__item">
                      <Link to="/" className="nav__item-link">Home Modern</Link>
                    </li>
                    <li className="nav__item">
                      <Link to="/" className="nav__item-link">Home Classic</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav__item  has-dropdown">
                  <Link to="/" data-toggle="dropdown" className="dropdown-toggle nav__item-link">Company</Link>
                  <ul className="dropdown-menu">
                    <li className="nav__item">
                      <Link to="/" className="nav__item-link">About Us</Link>
                    </li>
                    <li className="nav__item">
                      <Link to="/" className="nav__item-link">Why Choose Us</Link>
                    </li>
                    <li className="nav__item">
                      <Link to="/" className="nav__item-link">Leadership Team</Link>
                    </li>
                    <li className="nav__item">
                      <Link to="/" className="nav__item-link">Award & Recognition</Link>
                    </li>
                    <li className="nav__item">
                      <Link to="/" className="nav__item-link">Pricing & Plans</Link>
                    </li>
                    <li className="nav__item">
                      <Link to="/" className="nav__item-link">Help & FAQs</Link>
                    </li>
                    <li className="nav__item">
                      <Link to="/" className="nav__item-link">Careers</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav__item  has-dropdown">
                  <Link to="/" data-toggle="dropdown" className="dropdown-toggle nav__item-link">IT Solutions</Link>
                  <ul className="dropdown-menu wide-dropdown-menu">
                    <li className="nav__item">
                      <div className="row mx-0">
                        <div className="col-sm-6 dropdown-menu-col">
                          <Link to="/" className="nav__item-link dropdown-menu-title">IT Solutions</Link>
                          <ul className="nav flex-column">
                            <li className="nav__item"><Link className="nav__item-link" to="/">IT
                              Management</Link>
                            </li>
                            <li className="nav__item"><Link className="nav__item-link" to="/">Cyber
                              Security</Link>
                            </li>
                            <li className="nav__item"><Link className="nav__item-link" to="/">Cloud
                              Computing</Link>
                            </li>
                            <li className="nav__item"><Link className="nav__item-link" to="/">IT
                              Consulting</Link>
                            </li>
                            <li className="nav__item"><Link className="nav__item-link" to="/">Software
                              Dev</Link>
                            </li>
                            <li className="nav__item"><Link className="nav__item-link" to="/">IT Support</Link>
                            </li>

                          </ul>
                        </div>
                        <div className="col-sm-6 dropdown-menu-col">
                          <Link to="/" className="nav__item-link dropdown-menu-title">Industries</Link>
                          <ul className="nav flex-column">
                            <li className="nav__item"><Link className="nav__item-link"
                              to="/">Education,
                              Non-Profit</Link></li>
                            <li className="nav__item"><Link className="nav__item-link"
                              to="/">Accounting,
                              Finance</Link></li>
                            <li className="nav__item"><Link className="nav__item-link"
                              to="/">Government &
                              Public</Link></li>
                            <li className="nav__item"><Link className="nav__item-link" to="/">Energy
                            &
                              Utilities</Link></li>
                            <li className="nav__item"><Link className="nav__item-link" to="/">Legal,
                            Law
                              Firms</Link></li>
                            <li className="nav__item"><Link className="nav__item-link"
                              to="/">Manufacturing</Link>
                            </li>

                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="nav__item  has-dropdown">
                  <Link to="/" data-toggle="dropdown" className="dropdown-toggle nav__item-link">News&Media</Link>
                  <ul className="dropdown-menu">
                    <li className="nav__item">
                      <Link to="/" className="nav__item-link">Our Blog</Link>
                    </li>
                    <li className="nav__item">
                      <Link to="/" className="nav__item-link">Single Blog Post</Link>
                    </li>
                    <li className="nav__item">
                      <Link to="/" className="nav__item-link">Case Studies Grid</Link>
                    </li>
                    <li className="nav__item">
                      <Link to="/" className="nav__item-link">Case Studies Modern</Link>
                    </li>
                    <li className="nav__item">
                      <Link to="/" className="nav__item-link">Case Studies Classic</Link>
                    </li>
                    <li className="nav__item">
                      <Link to="/" className="nav__item-link">Single Case Study</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav__item  has-dropdown">
                  <Link to="#" data-toggle="dropdown" className="dropdown-toggle nav__item-link">Features</Link>
                  <ul className="dropdown-menu">
                    <li className="nav__item">
                      <Link to="/" className="nav__item-link">Coming Soon</Link>
                    </li>
                    <li className="nav__item">
                      <Link to="/" className="nav__item-link">404 Page</Link>
                    </li>
                    <li className="nav__item">
                      <Link to="/" className="nav__item-link  open-register-popup">Register</Link>
                    </li>
                    <li className="nav__item">
                      <Link to="/" className="nav__item-link  open-login-popup">Login</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav__item">
                  <Link to="/" className="nav__item-link">Contacts</Link>
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
