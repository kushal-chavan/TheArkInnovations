import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import background from '../assets/images/backgrounds/6.png';

const Career = () => (
    <Layout>
        <Seo title="Career" />
        <section className="contact-layout1">
        <div style={{position: 'absolute'}}><img src={background} alt="background" /></div>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-5 mb-20">
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
                    <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-1">
                        <form className="contact-panel__form" method="post" action="" id="contactForm">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h4>Apply for a Position</h4>
                                    <p>Please complete the form below to apply for a position with us.</p>
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
                                    <div className="form-group">
                                        <label for="contact-website">Applying for Position</label>
                                        <input type="text" className="form-control" placeholder="Applying for Position" id="contact-position"
                                            name="contact-position" />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <div className="form-group mb-20">
                                        <label for="contact-message">Additional Details (optional)</label>
                                        <textarea className="form-control" placeholder="Describe your inquirey!" id="contact-message"
                                            name="contact-message"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label for="contact-website">Upload Resume</label>
                                        <input style={{padding: '10px 20px'}} type="file" className="form-control" placeholder="Upload Resume" id="contact-resume"
                                            name="contact-resume" />
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
                </div>
            </div>
        </section>
    </Layout>
)

export default Career
