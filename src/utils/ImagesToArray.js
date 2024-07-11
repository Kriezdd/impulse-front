export default function imagesToGallery(r) {
  const images = [];
  for (let i = 0; i < r.length; i++) {
    images[i] = {src: r[i]};
  }
  return images;
}