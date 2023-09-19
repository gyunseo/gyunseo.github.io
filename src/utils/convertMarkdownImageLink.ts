import { visit } from "unist-util-visit";

// markdown image-link converter
const convertMarkdownImageLink = () => {
  return (tree: any) => {
    // AST에서 image 노드를 찾아서 url을 수정한다.
    visit(tree, "image", node => {
      console.log("node", node);
      // trim "/public" from the image url
      node.url = node.url.replace("/public", "");
      console.log("trimmed node", node);
    });
  };
};
export default convertMarkdownImageLink;
