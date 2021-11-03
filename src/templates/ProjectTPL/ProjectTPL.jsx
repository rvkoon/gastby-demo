import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import COMPONENTS_CONF from "../../components/conf";
import Button from "../../components/Button";
import Section from "../../components/Section";
import * as classes from "./projectTpl.module.scss";

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
      components {
        internal {
          type
        }
        image {
          fluid {
            src
          }
        }
        description
        title
      }
    }
  }
`;

export default function ProjectTPL({ data }) {
  console.log(data);

  return (
    <section
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {data.contentfulProject?.components?.map((component) =>
        React.createElement(COMPONENTS_CONF.TYPES[component.internal?.type], {
          ...component,
        })
      )}
      <Section otherClasses={classes.projectContent}>
        <h1>{data.contentfulProject.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data.contentfulProject.description.childMarkdownRemark.html,
          }}
        ></div>
      </Section>
      <Link to={"/"} className={classes.backButton}>
        <Button text="Back home" />
      </Link>
    </section>
  );
}
