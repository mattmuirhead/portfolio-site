const path = require(`path`)


exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return graphql(`
        {
            allContentfulAboutPage {
                edges {
                    node {
                        slug
                    }
                }
            }
            allContentfulProjects {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `).then(result => {
        result.data.allContentfulAboutPage.edges.forEach(({ node }) => {
            createPage({
                path: node.slug,
                component: path.resolve(`./src/templates/about/about.js`),
                context: {
                    slug: node.slug,
                },
            })
        }),
        result.data.allContentfulProjects.edges.forEach(({ node }) => {
            createPage({
                path: '/project/' + node.slug,
                component: path.resolve(`./src/templates/project/project.js`),
                context: {
                    slug: node.slug,
                },
            })
        })
    })
}