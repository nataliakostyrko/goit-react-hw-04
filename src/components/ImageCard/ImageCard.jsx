import s from "./ImageCard.module.css";

const ImageCard = ({ imageData, OpenModal }) => {
  return (
    <div className={s.imageCard}>
      <img
        src={imageData.urls.small}
        alt={imageData.description}
        onClick={() => {
          OpenModal(imageData.urls.regular);
        }}
      />
    </div>
  );
};

export default ImageCard;