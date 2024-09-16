export const Book = (props) => {
  const { title, img, author, height, width, ranking } = props;

  const bookFocus = function () {
    const imageDetails = document.getElementsByClassName("image-details")[0];
    const imageCard = document.getElementsByClassName("about-img")[ranking];
    const body = document.getElementsByTagName("body")[0];
    imageDetails.classList.add("active");
    imageCard.classList.add("active");
    body.classList.add("active");
  };
  return (
    <article className="book" data-id={`#${ranking + 1}`}>
      <figure>
        <img
          onClick={bookFocus}
          className="book-img"
          src={img}
          alt={title}
          height={height}
          width={width}
        />
      </figure>
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

export default Book;
