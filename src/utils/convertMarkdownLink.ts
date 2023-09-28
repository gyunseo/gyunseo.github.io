import { visit } from "unist-util-visit";

// markdown image-link converter
const convertMarkdownLink = () => {
  return (tree: any) => {
    // AST에서 link 노드를 찾아서 url을 수정한다.
    visit(tree, "link", node => {
      // if url matches link regex, them trim the .md extension
      if (node.url.match(/^.*\.(md)$/gi)) {
        node.url = node.url.replace(/\.md$/gi, "");
      }
    });
  };
};
export default convertMarkdownLink;
