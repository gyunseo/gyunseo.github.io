import { visit } from "unist-util-visit";

export const remarkMathDebug = () => {
  return (tree: any) => {
    console.log("!!!!!!!!!!!!");
    visit(tree, "math", node => {
      console.log(node.value);
    });
  };
};
// markdown image-link converter
export const updateImageLinkNode = () => {
  return (tree: any) => {
    // AST에서 image 노드를 찾아서 url을 수정한다.
    visit(tree, "image", node => {
      // console.log(`before conversion: ${node.url}`);

      // if url starts with "/public", then trim "/public" from the image url
      if (node.url.startsWith("/public")) {
        node.url = node.url.slice(7);
      }
      // if url starts with "public", then trim "public" from the image url
      if (node.url.startsWith("public")) {
        node.url = node.url.slice(6);
      }
      // if url starts with "/src/assets/image", then replace "/src/assets/image" with "@assets/image"
      if (node.url.startsWith("/src/assets/image")) {
        node.url = node.url.replace("/src/assets/image", "@assets/image");
      }
      // if url starts with "src/assets/image", then replace "src/assets/image" with "@assets/image"
      if (node.url.startsWith("src/assets/image")) {
        node.url = node.url.replace("src/assets/image", "@assets/image");
      }
      // console.log(`after conversion: ${node.url}`);
    });
  };
};

export const updateLinkNode = () => {
  return (tree: any) => {
    // AST에서 link 노드를 찾아서 url을 수정한다.
    visit(tree, "link", node => {
      // if url matches link regex, them trim the .md extension
      if (node.url.match(/^.*\.(md)$/gi)) {
        node.url = `/posts/${node.url.replace(/\.md$/gi, "")}`;
      }
    });
  };
};
