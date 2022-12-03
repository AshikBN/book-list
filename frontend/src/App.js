import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AddBook from "./components/AddBook";
import Authentication from "./components/Authentication";
import BookDetail from "./components/BookDetail";
import Books from "./components/Books";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Authentication />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/books"} element={<Books />} />
        <Route path={"/addbook"} element={<AddBook />} />
        <Route path={"/bookdetail"} element={<BookDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
