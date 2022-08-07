import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import TodoList from "./components/TodoList";

const App = () => {
  const [data, setData] = useState({})
  const [todos, setTodos] = useState([])

  const handleChange = (key, value) => {
    setData({ ...data, ...{ [key]: value } });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, data]);
    console.log(todos)
  };

  return (
    <div className="container p-4">
      <div className="row py-3">
      <Typography variant="h6" component="h1">
        Add Todo
      </Typography>
        <form onSubmit={onSubmit}>
          <div className="my-2 mx-0 px-0">
            <TextField
              id="title"
              label="Title"
              variant="standard"
              required
              inputProps={{
                minLength: 1,
                maxLength: 200,
                pattern: "[A-Za-z0-9- ]+",
              }}
              onChange={(e) => {
                handleChange("title", e.target.value);
              }}
            />
          </div>
          <div className="my-2 px-0">
            <TextField
              id="description"
              label="Description"
              variant="standard"
              multiline
              rows={4}
              required
              inputProps={{
                minLength: 1,
                maxLength: 2000000,
                pattern: "[A-Za-z0-9 ]+",
              }}
              onChange={(e) => {
                handleChange("description", e.target.value);
              }}
            />
          </div>
          <div className="py-4 w-100 h-100">
            <Button
              variant="outlined"
              color="primary"
              sx={{ maxWidth: "50%" }}
              type="submit"
            >
              Add
            </Button>
          </div>
        </form>
      </div>
      <hr></hr>
      <div className="row py-4">
        <TodoList todos={todos}/>
      </div>
    </div>
  );
};

export default App;
