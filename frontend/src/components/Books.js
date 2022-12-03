import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Book from "./Book";
import "./Books.css";

const Books = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  //const [username,setUsername]=useState("")
  const getBooks = async () => {
    const { username } = JSON.parse(localStorage.getItem("userInfo"));
    const { data } = await axios.get(`/api/books?username=${username}`);
    setBooks([...data]);
  };
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <>
      <h1>Book List</h1>
      <button
        onClick={() => {
          navigate("/addbook");
        }}
      >
        Add New Book
      </button>
      <div className="books-container">
        {books?.map((book) => {
          return <Book book={book} />;
        })}
      </div>
    </>
  );
};

export default Books;
