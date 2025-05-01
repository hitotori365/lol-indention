function walkNodeTree(rootNode) {
  const walker = document.createTreeWalker(
    rootNode,
    NodeFilter.SHOW_TEXT, // テキストノードのみを対象
    {
      acceptNode: function(node) {
        // scriptタグとstyleタグ内のテキストは除外
        if (node.parentElement.tagName === 'SCRIPT' || node.parentElement.tagName === 'STYLE') {
          return NodeFilter.FILTER_REJECT;
        }
        // "パチンコ" を含まないテキストノードも除外（パフォーマンス改善のため）
        if (!node.nodeValue.includes('パチンコ')) {
            return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  let node;
  // walker.nextNode() が null を返すまでループが回らないことがあるため、
  // 置換によってDOM構造が変わることを考慮し、配列に一時格納する
  const textNodesToProcess = [];
  while (node = walker.nextNode()) {
    textNodesToProcess.push(node);
  }

  textNodesToProcess.forEach(node => {
    // ノードがまだDOMツリーに存在するか確認（他の処理で削除された可能性）
    if (!node.parentElement) return;

    const text = node.nodeValue;
    if (text.includes('パチンコ')) {
      const fragment = document.createDocumentFragment();
      const parts = text.split('パチンコ');

      parts.forEach((part, index) => {
        fragment.appendChild(document.createTextNode(part));
        // 最後の要素でなければ <br> を挿入
        if (index < parts.length - 1) {
          // "カ" の直後に改行を入れる
          fragment.appendChild(document.createTextNode('パ'));
          fragment.appendChild(document.createElement('br'));
          fragment.appendChild(document.createTextNode('チンコ'));
        }
      });

      // 元のテキストノードを新しいノード群（fragment）で置換
      node.parentElement.replaceChild(fragment, node);
    }
  });
}

// DOMContentLoadedではなく、window.loadを使うことで、
// 画像などの読み込みも待ってから処理を開始し、より安定させる
window.addEventListener('load', () => {
  walkNodeTree(document.body);
});

// 動的コンテンツに対応する場合は MutationObserver を使う必要がある
// const observer = new MutationObserver(mutations => {
//   mutations.forEach(mutation => {
//     if (mutation.type === 'childList') {
//       mutation.addedNodes.forEach(addedNode => {
//         if (addedNode.nodeType === Node.ELEMENT_NODE) {
//           walkNodeTree(addedNode);
//         } else if (addedNode.nodeType === Node.TEXT_NODE) {
//           // テキストノードが直接追加された場合の処理（必要であれば）
//         }
//       });
//     }
//   });
// });

// observer.observe(document.body, {
//   childList: true,
//   subtree: true
// }); 