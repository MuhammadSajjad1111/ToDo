import React, { useState } from "react";

function CreateArea(props) {
  const [data, changeData] = useState({
    title: "",
    content: ""
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    changeData((preVal) => {
      return {
        ...preVal,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    props.onAdd(data);



  }

  return (
    <div>
      <form>
        <input
          onChange={changeHandler}
          name="title"
          placeholder="Title"
          value={data.title}
        />
        <textarea
          onChange={changeHandler}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={data.content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
