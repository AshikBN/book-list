import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookDetail = () => {
  const [book, setBook] = useState({});

  //   const [title, setTitle] = useState(book.title);
  //   const [author, setAuthor] = useState(book.author);
  //   const [isbn, setIsbn] = useState(book.isbn);
  //   const [description, setDescription] = useState(book.description);
  //   const [published_date, setDate] = useState(book.published_date);
  //   const [publisher, setPublisher] = useState(book.publisher);

  const navigate = useNavigate();
  //const bookdetail = JSON.parse(localStorage.getItem("bookDetail"));
  useEffect(() => {
    const bookdetail = JSON.parse(localStorage.getItem("bookDetail"));
    setBook({ ...bookdetail });
  }, []);

  const deleteBook = async () => {
    const data = await axios.delete(`api/deletebook?id=${book._id}`);
    console.log(data);
    navigate("/books");
  };

  const updateBook = () => {
    const data = axios.put("/api/updatebook", book);
    console.log(data);
    navigate("/books");
  };
  return (
    <div>
      <div>
        <p>
          Title{" "}
          <input
            type={"text"}
            defaultValue={book.title}
            onChange={(e) => {
              setBook({ ...book, title: e.target.value });
            }}
          />
        </p>
        <p>
          Author{" "}
          <input
            defaultValue={book.author}
            onChange={(e) => {
              setBook({ ...book, author: e.target.value });
            }}
          />
        </p>
        <p>
          ISBN{" "}
          <input
            defaultValue={book.isbn}
            onChange={(e) => {
              setBook({ ...book, isbn: e.target.value });
            }}
          />
        </p>
        <p>
          Description{" "}
          <input
            defaultValue={book.description}
            onChange={(e) => {
              setBook({ ...book, description: e.target.value });
            }}
          />
        </p>
        <p>
          Published Date{" "}
          <input
            defaultValue={book.published_date}
            onChange={(e) => {
              setBook({ ...book, published_date: e.target.value });
            }}
          />
        </p>
        <p>
          Publisher{" "}
          <input
            defaultValue={book.publisher}
            onChange={(e) => {
              setBook({ ...book, publisher: e.target.value });
            }}
          />
        </p>
      </div>
      <button onClick={updateBook}>Update</button>
      <button onClick={deleteBook}>Delete</button>
    </div>
  );
};

export default BookDetail;
