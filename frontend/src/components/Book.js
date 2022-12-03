import React from "react";
import frontpage from "./photo.avif";
import "./Book.css";
import { useNavigate } from "react-router-dom";

const Book = ({ book }) => {
  const navigate = useNavigate();
  return (
    <div
      className="book-container"
      onClick={() => {
        localStorage.setItem("bookDetail", JSON.stringify(book));
        navigate("/bookdetail");
      }}
    >
      <img className="book-img" src={frontpage} alt="" />
      <p>{book.title}</p>
      <p>{book.author}</p>
      <p>{book.description}</p>
    </div>
  );
};

export default Book;
