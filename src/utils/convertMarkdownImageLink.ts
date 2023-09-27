import { visit } from "unist-util-visit";

// markdown image-link converter
const convertMarkdownImageLink = () => {
  return (tree: any) => {
    // AST에서 image 노드를 찾아서 url을 수정한다.
    visit(tree, "image", node => {
      // console.log("node", node);
      // if url starts with "/public", then trim "/public" from the image url
      if (node.url.startsWith("/public")) {
        node.url = node.url.slice(7);
      }
      // if url starts with "public", then trim "public" from the image url
      if (node.url.startsWith("public")) {
        node.url = node.url.slice(6);
      }
      // console.log("trimmed node", node);
    });
  };
};
export default convertMarkdownImageLink;
