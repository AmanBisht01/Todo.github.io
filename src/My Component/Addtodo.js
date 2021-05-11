
import React, { useState } from 'react';

export const Addtodo = (props) => {
  const [Title, setTitle] = useState("");
  const [desc, setdesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!Title || !desc) {
      alert("Title or function cannot be blank")
    }
    else {
      props.addTodo(Title, desc);
      setTitle("");
      setdesc("");
    }
  };
  return (
    <div className="container my-3">
      <h3>Add A Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={Title} onChange={(e) => { setTitle(e.target.value) }}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input type="text" value={desc} onChange={(e) => { setdesc(e.target.value) }}
            className="form-control" id="desc" />
        </div>

        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};
