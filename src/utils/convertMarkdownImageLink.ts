import { visit } from "unist-util-visit";

// Convert regular Markdown image-link to desired format
export const convertMarkdownImageLink = () => {
  return (tree: any) => {
    visit(tree, "text", (node, index, parent) => {
      const markdownImageRegex = /!\[([^\]]*)\]\(([^\)]+)\)/g;
      let match;
      let lastIndex = 0;
      const newNodes = [];

      while ((match = markdownImageRegex.exec(node.value)) !== null) {
        const [fullMatch, altText, imageUrl] = match;
        const start = match.index;
        const end = markdownImageRegex.lastIndex;

        if (start !== lastIndex) {
          newNodes.push({
            type: "text",
            value: node.value.slice(lastIndex, start),
          });
        }

        // 이미지 URL에서 /public을 제거하는 부분
        let trimmedImageUrl = imageUrl.startsWith("/public")
          ? imageUrl.slice(7)
          : imageUrl;

        newNodes.push({
          type: "image",
          url: trimmedImageUrl,
          alt: altText,
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
