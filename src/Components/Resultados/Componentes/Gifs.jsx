import "../../../Styles/Gifs.css";

export default function Gifs({ imageUrl, title, url }) {
  return (
    <div className="contenedorImagenes">
      <a href={url} target="_blank" rel="noreferrer">
        <img className="imagenesGifs" src={imageUrl} alt={title} />
      </a>
    </div>
  );
}
