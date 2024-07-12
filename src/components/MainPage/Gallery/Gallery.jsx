import {useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Divider from "$components/ui/Divider/Divider.jsx";
import ImageGallery from "$components/ImageGallery/ImageGallery.jsx";
import './Gallery.scss';
import imagesToGallery from "../../../utils/ImagesToArray.js";

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  const images = Object.values(import.meta.glob('$images/gallery/*.{png,jpg,jpeg,PNG,JPEG}', {
    eager: true,
    query: '?url',
    import: 'default'
  }));
  const galleryImages = imagesToGallery(images)

  return (
    <div className="gallery-section gaps">
      <Divider link="gallery" spoiler="фото с прошлых проектов" title="наша галерея"/>
      <div id="gallery" className="wrapper">
        <ImageGallery
          images={images}
          onClick={(currentIndex) => setIndex(currentIndex)}
        />
      </div>
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={galleryImages}
      />
    </div>
  );
};

export default Gallery;