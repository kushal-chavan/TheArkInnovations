// gatsby-node.js
const { createFilePath } = require(`gatsby-source-filesystem`)
const Industries = require('./src/content/industry.json');
const Solutions = require('./src/content/it-solutions.json');
const path = require(`path`)
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions

    // page.matchPath is a special key that's used for matching pages
    // only on the client.
    if (page.path.match(/^\/page/)) {
        page.matchPath = "/page/*"

        // Update the page.
        createPage(page)
    }


    Industries.forEach(node => {
        actions.createPage({
            path: '/service/' + node.slug,
            component: path.resolve('./src/template/service.js'),
            context: { slug: node.slug }
        })
    })

    Solutions.filter(i => i.visible === true).forEach(node => {
        actions.createPage({
            path: '/it-solutions/' + node.slug,
            component: path.resolve('./src/template/it-solutions.js'),
            context: { slug: node.slug }
        })
    })
}