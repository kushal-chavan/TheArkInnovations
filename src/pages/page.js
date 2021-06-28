import * as React from "react";
import { Router } from "@reach/router";
import Layout from "../components/layout";

const SomeSubPage = props => {
  return <div>Hi from SubPage with id: {props.id}</div>
}

const Page = () => (
  <Layout>
    <Router>
      <SomeSubPage path="/page/:id" />
    </Router>
  </Layout>
)

export default Page