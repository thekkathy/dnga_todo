import { List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

const TodoList = ({ todos }) => {
  return (
    <div>
      <Typography variant="h6" component="h1">
        Todo List
      </Typography>
      <List>
        {todos.length !== 0  ? (
          <>
            {todos.map((todo) => {
              return (
                <>
                  <ListItem>
                    <ListItemText
                      primary={todo.title}
                      secondary={todo.description}
                    />
                  </ListItem>
                </>
              );
            })}
          </>
        ) : (
          <div className="row p-3">No to do items to show!</div>
        )}
      </List>
    </div>
  );
};

export default TodoList;
