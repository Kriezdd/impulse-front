export default function transpileImages(r) {
  const images = {};
  for (let i = 0; i < r.length; i++) {
    images[r[i].split('/').pop().split('.')[0]] = r[i];
  }
  return images;
}