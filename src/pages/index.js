import * as React from "react";
import { graphql, Link } from "gatsby";

export const pageQuery = graphql`
  query {
    allContentfulProject {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  return (
    <main>
      <h1>HELLO WORLD</h1>
      {data.allContentfulProject.edges.map((edge) => (
        <Link to={edge.node.slug}>{edge.node.slug}</Link>
      ))}
    </main>
  );
};

export default IndexPage;
