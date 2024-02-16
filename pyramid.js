function generatePyramid(height) {
  let pyramid = '';
  for (let i = 1; i <= height; i++) {
      let spaces = ' '.repeat(height - i);
      let blocks = '*'.repeat(2 * i - 1);
      pyramid += spaces + blocks + '\n';
  }
  return pyramid;
}

function centerPyramid(height) {
  const pyramid = generatePyramid(height);
  const lines = pyramid.trim().split('\n');
  const maxWidth = lines[lines.length - 1].length;
  const centeredPyramid = lines.map(line => {
      const spacesToAdd = (maxWidth - line.length) / 2;
      const padding = ' '.repeat(spacesToAdd);
      return padding + line;
  }).join('\n');
  return centeredPyramid;
}

const height = 5;
console.log(centerPyramid(height));