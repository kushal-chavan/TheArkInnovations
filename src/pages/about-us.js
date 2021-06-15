import React from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutUs = () => {

    return (
        <Layout>
            <Seo title="About Us" />
            <section className="about-layout1 pt-200">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="heading-layout2 mb-30">
                                <h2 className="heading__subtitle">Trusted By The World's Best Organizations</h2>
                                <h3 className="heading__title mb-30">Our technology allows you to offer latest software to your possible
                                    customers!
                                </h3>
                                <p className="heading__desc mb-25">Mintech has been helping organizations throughout the World to manage their
                                    IT with our unique approach to technology management and consultancy solutions. As one of the world's
                                    largest ITService Providers, our deep pool of over 130 certified engineers and IT support staff are
                                    ready to help.</p>
                            </div>
                            <a href="about-us.html" className="btn btn__primary btn__xl btn__icon mb-30">
                                <span>More About Us</span>
                                <i className="icon-arrow-right"></i>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="about__img">
                                <img src="assets/images/about/1.jpg" alt="about" />
                                <div className="cta-banner">
                                    <div className="slick-carousel" data-slick='{"slidesToShow": 1, "arrows": false, "dots": true}'>
                                        <div className="cta-banner__item">
                                            <div className="cta-banner__icon"><i className="icon-technician"></i></div>
                                            <h4 className="cta-banner__title mb-0">Utilising latest timelineing solutions, and decades of work
                                                experience.
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
export default AboutUs
