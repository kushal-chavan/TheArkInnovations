import React from 'react';
import Layout from "../components/layout";
import Seo from "../components/seo";
import banner from '../assets/images/about-banner.jpg';
import AboutData from '../content/about.json';

const AboutUs = () => {

    return (
        <Layout>
            <Seo title={AboutData.pageName} />
            <section className="about-layout1 pt-200">
                <div className="container">
                    <h1 className="mb-50 text-center">{AboutData.pageName}</h1>
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="heading-layout2 mb-30">
                                <h3 className="heading__title mb-30">{AboutData.titleOne}</h3>
                                <p className="heading__desc mb-25" dangerouslySetInnerHTML={{ __html: AboutData.descOne }}></p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="heading-layout2 mb-30">
                                <h3 className="heading__title mb-30">{AboutData.titleTwo}</h3>
                                <p className="heading__desc mb-25" dangerouslySetInnerHTML={{ __html: AboutData.descTwo }}></p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <img src={banner} alt="banner" style={{ padding: '5px 0px' }} />
                    </div>
                </div>
            </section>
        </Layout>
    )
}
export default AboutUs
