/*const unified = require("unified")
const remarkParse = require("remark-parse")
const moveImagesToRoot = require("mdast-move-images-to-root")
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.onCreateNode = async ({ node, actions, getCache, createNodeId }) => {
  const { createNode, createParentChildLink } = actions
  if (node.internal.type === "StrapiXXX") {
    const tree = moveImagesToRoot()(unified().use(remarkParse).parse(node.text))

    for (let child of tree.children) {
      if (child.type === "image") {
        let fileNode = await createRemoteFileNode({
          url: child.url,
          getCache,
          createNode,
          createNodeId,
          parentNodeId: node.id,
        }) // .then() doesn't work?
        createParentChildLink({ parent: node, child: fileNode })
      }
    }
  }
}*/
