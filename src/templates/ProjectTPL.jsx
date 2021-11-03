import React from "react";
import { graphql, Link } from "gatsby";

export const pageQuery = graphql`
  query ($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      slug
      description {
        description
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

export default function ProjectTPL({ data }) {
  console.log(data);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>{data.contentfulProject.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.contentfulProject.description.childMarkdownRemark.html,
        }}
      ></div>
      <Link to={"/"}>BACK HOME</Link>
    </div>
  );
}
