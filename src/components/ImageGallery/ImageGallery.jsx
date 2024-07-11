import './ImageGallery.scss';

// todo: delete slick and embla npm packages
const ImageGallery = ({images, onClick}) => {

  const handleClickImage = (index) => {
    onClick(index);
    console.log(index);
  };


  return (
    <div className="gallery__container wrapper">
      {images.map((image, index) => (
        <div
          onClick={() => handleClickImage(index)}
          key={index}
          className="gallery__image-container"
        >
          <img className="gallery__image" src={image} alt={`image-${index}`}/>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;