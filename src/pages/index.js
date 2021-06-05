import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundSlider from 'gatsby-image-background-slider'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from "gatsby-image"
import MySlider from "../components/slider"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <MySlider/>
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
            <ul className="list-items list-items-layout2 list-horizontal list-unstyled d-flex flex-wrap mt-40 mb-30">
              <li>Eliminate Repeat Entry</li>
              <li>Simpliy Communication</li>
              <li>Drive Business Process</li>
              <li>Speed Up Transactions</li>
              <li>Structure Data & Docs</li>
              <li>Automate Workflows</li>
            </ul>
            {/* <img src="assets/images/about/singnture.png" alt="singnture"/> */}
          </div>
        </div>
      </div>
    </section>
    <section class="services-layout3 pt-40 pb-100">
      <div class="container">
        <div class="row">
          {[1, 2, 3,4,5,6].map(i =>
            <div class="col-sm-12 col-md-6 col-lg-4" key={i}>
              <div class="service-item">
                <div class="service-item__content">
                  <div class="service-item__icon">
                    <i class="icon-server"></i>
                  </div>
                  <h4 class="service-item__title">IT Management <br /> Services</h4>
                  <p class="service-item__desc">IT management service that manages and oversees the IT infrastructure of
                  organization responsible for network and operations which includes data communication.</p>
                  <a href="/" class="btn btn__secondary btn__link">
                    <span>Read More</span>
                    <i class="icon-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
