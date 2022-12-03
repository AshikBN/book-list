import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBook.css";

const AddBook = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [publisher, setPublisher] = useState("");

  const addBook = async () => {
    const { username } = JSON.parse(localStorage.getItem("userInfo"));
    const data = await axios.post("/api/addbook", {
      username,
      title,
      author,
      isbn,
      description,
      date,
      publisher,
    });
    navigate("/books");
  };
  return (
    <div className="book-form">
      <input
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        placeholder="Author"
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      />
      <input
        placeholder="ISBN"
        onChange={(e) => {
          setIsbn(e.target.value);
        }}
      />
      <input
        placeholder="Describe the book"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <input
        placeholder="Published Date"
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <input
        placeholder="Publisher of this Book"
        onChange={(e) => {
          setPublisher(e.target.value);
        }}
      />
      <button
        className="add-btn"
        onClick={() => {
          addBook();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default AddBook;
