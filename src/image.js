export default function Image(props) {
  const { title, img, ranking, author } = props;

  return (
    <div className="about-img">
      <h2 className="image-title">{`#${ranking + 1}`}</h2>
      <br />
      <figure>
        <img src={img} alt={title} className="book-img" />
      </figure>
      <br />
      <h4 className="image-author">{author}</h4>
    </div>
  );
}
