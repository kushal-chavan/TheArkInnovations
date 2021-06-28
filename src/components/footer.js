import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import logo from '../assets/images/logo.png'

const Footer = () => (
    <footer class="footer bg-heading">
        <div class="footer-contact pt-50 pb-50">
            <div class="container">
                <div class="row" 
                data-sal="slide-left"
                data-sal-delay="100"
                data-sal-easing="ease">
                    <div class="col-sm-4 col-md-4 col-lg-2">
                        <div class="contact-info">
                            <h6 class="footer-widget__title">Quick Contact</h6>
                            <ul class="contact-list list-unstyled mb-0">
                                <li><a href="tel:00123968574">+ (002) 0106-1245-741</a></li>
                                <li><a href="mailto:Mintech@7oroof.com">Mintech@7oroof.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-4 col-lg-2">
                        <div class="contact-info">
                            <h6 class="footer-widget__title">Our Address</h6>
                            <ul class="contact-list list-unstyled mb-0">
                                <li>2307 Beverley Rd , New York 11226 U.S.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-4 col-lg-2">
                        <div class="contact-info">
                            <h6 class="footer-widget__title">Opening Hours</h6>
                            <ul class="contact-list list-unstyled mb-0">
                                <li>Mon - Fri: 8am - 7pm</li>
                                <li>Sat - Sun: 9 am - 8pm</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-8 col-lg-6">
                        <h6 class="footer-widget__title">Newsletter</h6>
                        <form class="footer-form d-flex mb-0">
                            <input type="text" class="form-control mr-20" placeholder="Your Email Address"/>
                                <button type="submit" class="btn btn__primary btn__primary-style2">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-primary">
                <div class="container">
                    <div class="row" 
                    data-sal="slide-up"
                    data-sal-delay="100"
                    data-sal-easing="ease">
                        <div class="col-sm-12 col-md-12 col-lg-4 footer-widget footer-widget-about">
                            <div class="footer-widget__content">
                            <img width="250px" src={logo} alt="logo" style={{padding:'10px 0px'}}/>
                                    <p class="color-gray mb-40">We are experienced professionals who understand that It services is
                                    changing, and are
                true partners who care about your future business success.</p>
                            </div>
                        </div>
                            <div class="col-sm-6 col-md-6 col-lg-3 footer-widget footer-widget-nav">
                                <h6 class="footer-widget__title">Company</h6>
                                <div class="footer-widget__content">
                                    <nav>
                                        <ul class="list-unstyled">
                                            <li><Link to="/about-us">About Us</Link></li>
                                            <li><Link to="/services">Services</Link></li>
                                            <li><Link to="/career">Career</Link></li>
                                            <li><Link to="/contacts">Contacts</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-3 footer-widget footer-widget-nav">
                                <h6 class="footer-widget__title">Solutions</h6>
                                <div class="footer-widget__content">
                                    <nav>
                                        <ul class="list-unstyled">
                                            <li><Link to="/">Cyber Security</Link></li>
                                            <li><Link to="/">Cloud Computing</Link></li>
                                            <li><Link to="/">IT Consulting</Link></li>
                                            <li><Link to="/">Software Development</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-2 footer-widget footer-widget-nav">
                                <h6 class="footer-widget__title">We're Hiring</h6>
                                <div class="footer-widget__content">
                                    <p class="fz-14 color-white">Interested in joining the Mintech team?</p>
                                    <Link to="/career" className="btn btn__primary btn__primary-style2 btn__link">
                                        <span>Our Careers</span><i class="icon-arrow-right icon-outlined"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div class="footer-secondary">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-12 text-center">
                            <span class="fz-14">&copy; 2020 Ark Innovations, All Rights Reserved.</span>
                        </div>
                    </div>
                </div>
            </div>
  </footer>
)

export default Footer
