import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Section from "../components/Section";
import GatsbyLogo from "../images/svg/gatsby-logo.svg";
import Button from "../components/Button";
import * as classes from "./style/home.module.scss";

export const pageQuery = graphql`
  query {
    allContentfulProject {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;

export default function Home({ data }) {
  return (
    <Layout>
      <Section>
        <header>
          <img src={GatsbyLogo} alt="Gatsby js logo" className={classes.logo} />
          <h1>GATSBY DEMO</h1>
        </header>
      </Section>
      <Section>
        {data.allContentfulProject.edges.map((edge) => (
          <nav>
            <Link to={edge.node.slug}>
              <Button text={edge.node.title} />
            </Link>
            <br />
            <br />
          </nav>
        ))}
      </Section>
    </Layout>
  );
}
