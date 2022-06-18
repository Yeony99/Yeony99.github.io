/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createSchemaCustomization = ({ actions, schema }) => {
    const { createTypes } = actions
    const typeDefs = [
      "type MarkdownRemark implements Node { frontmatter: Frontmatter }",
      schema.buildObjectType({
        name: "Frontmatter",
        fields: {
          tags: {
            type: "[String!]",
            resolve(source, args, context, info) {
              const { tags } = source
              if (source.tags == null || (Array.isArray(tags) && !tags.length)) {
                return []
              }
              return tags
            },
          },
        },
      }),
    ]
    createTypes(typeDefs)
  }