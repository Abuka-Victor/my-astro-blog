// Drops <!-- ... --> comments from markdown so TODO notes never ship in the HTML.
const isComment = node =>
  node.type === "html" && /^\s*<!--[\s\S]*?-->\s*$/.test(node.value);

export function remarkStripHtmlComments() {
  const strip = node => {
    if (!Array.isArray(node.children)) return;
    node.children = node.children.filter(child => !isComment(child));
    node.children.forEach(strip);
  };
  return tree => strip(tree);
}
