import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby"
import Seo from "../components/seo";
// IMG
import background from '../assets/images/backgrounds/6.png'
import serImg from '../assets/images/services/7.jpg'
// Data
import Industries from '../content/industry.json';

const Services = () => {
  const shuffle = (array) => {
   return array.sort(() => Math.random() - 0.5);
  }
  return (
    <Layout>
      <Seo title="Services" />
      <section className="services-layout1 bg-no-repeat bg-size-auto bg-top-right pt-130 pb-90">
        <div style={{ position: 'absolute' }}><img src={background} alt="background" /></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
              <div className="heading heading-layout2 text-center mb-50">
                <h2 className="heading__subtitle">Nationwide Service, Local Expertise</h2>
                <h3 className="heading__title">INDUSTRY SECTORS</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {shuffle(Industries).slice(0, 6).map(item => <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="service-item" key={item.name}>
                <div className="service-item__img">
                  <img src={serImg} alt="service" className="w-100" />
                </div>
                <h4 className="service-item__title">{item.name}</h4>
                <p className="service-item__desc">{item.detail}</p>
                <Link to="/services" className="btn btn__secondary"><span>Read More</span>
                  <i className="icon-arrow-right"></i>
                </Link>
              </div>
            </div>)}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Services
