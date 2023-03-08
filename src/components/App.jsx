import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [arr, changeArr] = useState([]);

  function addHandler(Note) {
    changeArr((prevVal) => {
      return [...prevVal, Note];
    });
  }
  function deleteItem(id) {
    changeArr((prevItem) => {
      return prevItem.filter((value, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addHandler} />
      {arr.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteItem}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
