import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ItSolutions from '../content/it-solutions.json';
import MySlider from "../components/slider"
import background from '../assets/images/backgrounds/5.png'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <MySlider />
    <section className="about-layout5 pt-130 pb-0">
      <div className="container">
        <div className="row heading-layout2">
          <div className="col-12">
            <h2 className="heading__subtitle color-body">Nationwide Service, Local Expertise</h2>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <h3 className="heading__title mb-30">Our technology allows you to offer the <span className="underlined-text">latest
              software</span> to your possible customers!
            </h3>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5 offset-xl-1">
            <div className="about__Text">
              <p>Improve efficiency, leverage tech, and provide better customer experiences with the modern technology
                services available allover the world. Our skilled personnel, utilising the latest processing software,
                combined with decades of experience.</p>
            </div>
            {/* <img src="assets/images/about/singnture.png" alt="singnture"/> */}
          </div>
        </div>
      </div>
    </section>
    <section className="services-layout3 pt-40 pb-100">
      <div className="container">
        <div className="row">
          {ItSolutions.map((item, i) =>
            <div className="col-sm-12 col-md-6 col-lg-4" key={item.name}>
              {i !== 5 && <div className="service-item">
                <div className="service-item__content">
                  <div className="service-item__icon">
                    <i className={item.icon}></i>
                  </div>
                  <h4 className="service-item__title">{item.name}</h4>
                  <p className="service-item__desc">{item.desc}</p>
                  <a href="/" className="btn btn__secondary btn__link">
                    <span>Read More</span>
                    <i className="icon-arrow-right"></i>
                  </a>
                </div>
              </div>}
              {i === 5 && <div className="service-item service-item-custom bg-overlay bg-overlay-primary" style={{ background: "#000", zIndex: 1, marginTop: '0' }}>
                <div className="bg-img">
                  <img src={background} alt="background" />
                </div>
                <div>
                  <h4 className="service-item__title">{item.name}</h4>
                  <p className="service-item__desc">{item.desc}</p>
                </div>
                <a href="/" className="btn btn__white btn__bordered btn__icon btn__xl">
                  <span>Find Your Solution</span>
                  <i className="icon-arrow-right"></i>
                </a>
              </div>
              }
            </div>)}
        </div>
      </div>
    </section>
    <section className="about-layout2 pb-130 bg-gray">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5">
            <div className="about__img">
              {/* <img src={background} alt="about" /> */}
              <div className="cta-banner">
                <h4 className="cta-banner__title mb-30">Thinking insights, verified driven research, and metrics data help
                  you make the right decisions!
                </h4>
                <a href="/" className="btn btn__primary btn__link">
                  <span>Read Case Studies</span><i className="icon-arrow-right icon-outlined"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
            <div className="heading-layout2 mb-30">
              <h2 className="heading__subtitle">Trusted By The World's Best Organizations</h2>
              <h3 className="heading__title mb-30">Manages service delivery across various business like, HR, Legal and
                other IT departments!!
              </h3>
            </div>
            <div className="about__Text">
              <p>Mintech has been helping organizations throughout the World to manage their IT with our unique approach
                to technology management and consultancy solutions. </p>
              <p>As one of the world's largest ITService Providers, our deep pool of over 130 certified engineers and IT
                support staff are ready to help.</p>
              <ul className="list-items list-unstyled mb-0">
                <li>Delivered in more than 450,000 client’s interactions </li>
                <li>Provided by experts to help challenge critical activities</li>
                <li>Complemented with peer perspectives and advice</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
