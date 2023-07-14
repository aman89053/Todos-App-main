import React, { useState } from 'react';


export const AddTodo = (props) => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Desc cannot be eamty");
    }
    else{
      props.addTodo(title, desc);
      settitle("");
      setdesc("");
    }
  }
  return (
    <div className="container">
      <h3 className="mt-3">Add Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" placeholder='Enter Title' value={title} onChange={(e) => { settitle(e.target.value) }} className="form-control" id="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Description</label>
          <input type="text" placeholder='Enter Description' value={desc} onChange={(e) => { setdesc(e.target.value) }} className="form-control" id="desc" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
