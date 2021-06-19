import React from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"
import Map from '../components/google-map';

const Contact = () => {

    return (
        <Layout>
        <Seo title="Contact Us" />
            <section className="contact-layout1">
                <Map />
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <form className="contact-panel__form" method="post" action="" id="contactForm">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h4 className="contact-panel__title">Get In Touch</h4>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <label for="contact-name">Name (required)</label>
                                            <input type="text" className="form-control" placeholder="Name" id="contact-name" name="contact-name"
                                                required />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <label for="contact-email">Email (required)</label>
                                            <input type="email" className="form-control" placeholder="Email" id="contact-email" name="contact-email"
                                                required />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <label for="contact-Phone">Phone (required)</label>
                                            <input type="text" className="form-control" placeholder="Phone" id="contact-Phone" name="contact-phone"
                                                required />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <label for="contact-website">Website (optional)</label>
                                            <input type="text" className="form-control" placeholder="Website (optional)" id="contact-website"
                                                name="contact-website" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <div className="form-group mb-20">
                                            <label for="contact-message">Additional Details (optional)</label>
                                            <textarea className="form-control" placeholder="Describe your inquirey!" id="contact-message"
                                                name="contact-message"></textarea>
                                        </div>
                                        <div className="custom-control custom-checkbox d-flex align-items-center  mb-20">
                                            <input type="checkbox" className="custom-control-input" id="terms" />
                                            <label className="custom-control-label" for="terms">I accept the privacy and terms.</label>
                                        </div>
                                        <button type="submit" className="btn btn__secondary btn__block ">Submit Request</button>
                                        <div className="contact-result"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-5 offset-lg-1">
                            <div className="contact-panel__info bg-overlay bg-overlay-primary">
                                <div className="contact-block">
                                    <h5 className="contact-block__title">Our Location</h5>
                                    <ul className="contact-block__list list-unstyled">
                                        <li>2307 Beverley Rd Brooklyn, New York 11226 United States.</li>
                                    </ul>
                                </div>
                                <div className="contact-block">
                                    <h5 className="contact-block__title">Quick Contact</h5>
                                    <ul className="contact-block__list list-unstyled">
                                        <li><a href="mailto:Mintech@7oroof.com"></a>Email: Mintech@7oroof.com</li>
                                        <li><a href="mailto:Mintech@7oroof.com"></a>Support: Mintech@7oroof.com</li>
                                    </ul>
                                </div>
                                <div className="contact-block">
                                    <h5 className="contact-block__title">Opening Hours</h5>
                                    <ul className="contact-block__list list-unstyled">
                                        <li>Monday - Friday</li>
                                        <li>09:00 AM - 06:00 PM</li>
                                    </ul>
                                </div>
                                <a href="contacs.html" className="btn btn__white btn__bordered btn__icon btn__xl">
                                    <span>Find Your Solution</span>
                                    <i className="icon-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-info pt-0 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className="contact-info-box">
                                <h4 className="contact__info-box-title">London Office</h4>
                                <ul className="contact__info-list list-unstyled">
                                    <li>Email: <a href="mailto:Mintech@7oroof.com">Mintech@7oroof.com</a></li>
                                    <li>Address: 2307 Beverley Rd Brooklyn, NY</li>
                                    <li>Phone: <a href="tel:5565454117">55 654 541 17</a></li>
                                    <li>Hours: Mon-Fri: 8am – 7pm</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className="contact-info-box">
                                <h4 className="contact__info-box-title">Berlin Office</h4>
                                <ul className="contact__info-list list-unstyled">
                                    <li>Email: <a href="mailto:Mintech@7oroof.com">Mintech@7oroof.com</a></li>
                                    <li>Address: 2307 Beverley Rd Brooklyn, NY</li>
                                    <li>Phone: <a href="tel:5565454117">55 654 541 17</a></li>
                                    <li>Hours: Mon-Fri: 8am – 7pm</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className="contact-info-box">
                                <h4 className="contact__info-box-title">Manchester Office</h4>
                                <ul className="contact__info-list list-unstyled">
                                    <li>Email: <a href="mailto:Mintech@7oroof.com">Mintech@7oroof.com</a></li>
                                    <li>Address: 2307 Beverley Rd Brooklyn, NY</li>
                                    <li>Phone: <a href="tel:5565454117">55 654 541 17</a></li>
                                    <li>Hours: Mon-Fri: 8am – 7pm</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
};

export default Contact