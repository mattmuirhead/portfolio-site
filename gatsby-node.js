const path = require(`path`)


exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return graphql(`
        {
            allContentfulProjects {
                edges {
                      node {
                        slug
                      }
                }
            }
        }
    `).then(result => {
        result.data.allContentfulProjects.edges.forEach(({ node }) => {
            createPage({
                path: '/project/' + node.slug,
                component: path.resolve(`./src/templates/project.js`),
                context: {
                    slug: node.slug,
                },
            })
        })
    })
}