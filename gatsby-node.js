const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const response = await graphql(`
    query {
      allContentfulProject {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  response.data.allContentfulProject.edges.forEach((edge) => {
    createPage({
      path: edge.node.slug,
      component: path.resolve(`./src/templates/ProjectTPL/ProjectTPL.jsx`),
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
