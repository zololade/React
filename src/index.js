import React from "react";
import ReactDOM from "react-dom/client";
import { books } from "./books";
import Book from "./Book";
import ImagePreview from "./image";
import "./styles/index.css";
import hide from "./hide";

function Booklist() {
  return (
    <>
      <section className="booklist">
        {books.map((book, index) => (
          <Book {...book} key={book.id} ranking={index} />
        ))}
      </section>
      <section onClick={hide} className="image-details" data-id="image-details">
        {books.map((book, index) => (
          <ImagePreview {...book} key={book.id} ranking={index} />
        ))}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
