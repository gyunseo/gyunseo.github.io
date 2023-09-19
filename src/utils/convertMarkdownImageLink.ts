import { visit } from "unist-util-visit";

// markdown image-link converter
const convertMarkdownImageLink = () => {
  console.log("convertMarkdownImageLink function called"); // 함수가 호출되었는지 확인, 호출은 되네
  debugger;
  return (tree: any) => {
    visit(tree, "text", (node, index, parent) => {
      const markdownImageRegex = /!\[(.*)\]\((.+)\)/g;

      let match;
      let lastIndex = 0;
      const newNodes = [];

      while ((match = markdownImageRegex.exec(node.value)) !== null) {
        const [fullMatch, imageName] = match;
        const start = match.index;
        const end = markdownImageRegex.lastIndex;

        if (start !== lastIndex) {
          newNodes.push({
            type: "text",
            value: node.value.slice(lastIndex, start),
          });
        }

        console.log("Image Match:", fullMatch); // 이미지 태그 매칭 확인
        console.log("Image Name:", imageName); // 이미지 이름 확인
        newNodes.push({
          type: "image",
          url: `/image/${imageName}`, // 경로를 `public/image`에 맞춰서 수정
          alt: imageName,
        });

        lastIndex = end;
      }

      if (newNodes.length > 0) {
        if (lastIndex < node.value.length) {
          newNodes.push({
            type: "text",
            value: node.value.slice(lastIndex),
          });
        }
        parent.children.splice(index, 1, ...newNodes);
      }
    });
  };
};
export default convertMarkdownImageLink;
