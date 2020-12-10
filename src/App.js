import React, { useState } from "react";
import "./styles.css";
import book from "./book";

var name = "Cross World";

var bookDb = Object.keys(book);

export default function App() {
  const [list, setList] = useState("Selfhelp");

  function listclickhandler(bookName) {
    setList(bookName);
  }

  return (
    <div className="App">
      <h1>Welcome {name}! </h1>

      <h3> My Best Author Book</h3>
      <h4> Click Here 👇 </h4>

      {bookDb.map((bookName) => {
        return (
          <button
            onClick={() => listclickhandler(bookName)}
            key={bookName}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {bookName}{" "}
          </button>
        );
      })}
      <hr />

      {book[list].map((list) => {
        return (
          <li
            key={list.name}
            style={{
              listStyle: "none",
              padding: "1rem",
              border: "1px solid #D1D5DB",
              width: "70%",
              margin: "0 auto",
              borderRadius: "0.5rem",
              background: "#E5E7EB"
            }}
          >
            <span style={{ fontSize: "larger" }}>{list.name} </span>
            <span style={{ fontSize: "smaller" }}>{list.author}</span>
            {/* <span style={{ fontSize: "larger" }}> {list.name} </span> */}
            {/* <span style={{ fontSize: "smaller" }}> {list.author} </span> */}
          </li>
        );
      })}
    </div>
  );
}
