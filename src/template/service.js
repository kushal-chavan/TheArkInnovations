import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby"
import Seo from "../components/seo";
// IMG
import background from '../assets/images/backgrounds/6.png'
import serImg from '../assets/images/services/7.jpg'
// Data
import Industries from '../content/industry.json';

const Service = (props) => {
  const data = Industries.find(i => i.slug === props.pageContext.slug);
  return (
    <Layout>
      <Seo title={"Services | "+data.name} />
      <section className="services-layout1 bg-no-repeat bg-size-auto bg-top-right pt-130 pb-90">
        <div style={{ position: 'absolute' }}><img src={background} alt="background" /></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
              <div className="heading heading-layout2 text-center mb-50">
                <h3 className="heading__title">{data.name}</h3>
              </div>
            </div>
          </div>
          <div className="row">
              <div className="col-sm-12">
                {data.detail}
              </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Service
