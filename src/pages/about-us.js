import React from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"
import banner from '../assets/images/about-banner.jpg'

const AboutUs = () => {

    return (
        <Layout>
            <Seo title="About Us" />
            <section className="about-layout1 pt-200">
                <div className="container">
                <h1 className="mb-50 text-center">About Us</h1>
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="heading-layout2 mb-30">
                                <h3 className="heading__title mb-30">What we do</h3>
                                <p className="heading__desc mb-25">Ark Innovation is a diversified information technology service provider serving customers 
                                in the Banking, Automotive, Higher Education, Insurance and Medical industry. 
                                We dedicate our efforts to transform our customer’s conceptual business ideas into a real working model using Technology.<br /><br />
                                Our core assets are technology skills, creativity and initiatives of our employees to achieve extraordinary 
                                results for our customers. Our hardworking and motivated employees keep us standing out.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="heading-layout2 mb-30">
                                <h3 className="heading__title mb-30">Our goals</h3>
                                <p className="heading__desc mb-25">Ark Innovation has distinguished itself by providing exceptional technology solutions by helping businesses 
                                adapt to a constantly changing market place. Globalization is putting a tremendous pressure on pricing and need for radical innovation 
                                to lead the market, Ark Innovation, with its worldwide presence, provides a highly innovative, low cost, alternative to traditional consulting firms.<br /><br />
                                Our software development teams excel in cutting-edge technologies like Internet application development, 
                                E-Commerce solutions, Web 2.0, n-tier architecture and rapid application development environments.</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <img src={banner} alt="banner" style={{padding:'5px 0px'}}/>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
export default AboutUs
