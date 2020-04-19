import React from "react";
import TodoItem from "./TodoItem";
import { TodoItemDataParams } from "../store/modules/types";
import { Button, Grid } from "semantic-ui-react";

interface Props {
  input: string;
  todoItems: TodoItemDataParams[];
  onCreate(): void;
  onRemove(id: number): void;
  onToggle(id: number): void;
  onChange(e: any): void;
}

const TodoList: React.SFC<Props> = ({
  input,
  todoItems,
  onCreate,
  onRemove,
  onToggle,
  onChange
}) => {
  const todoItemList = todoItems.map(todo => 
      todo ? (
    <TodoItem
      key={todo.id}
      done={todo.done}
      onToggle={() => onToggle(todo.id)}
      onRemove={() => onRemove(todo.id)}
      text={todo.text}
    />
  ) : null);

  return (
    <Grid>
    
      <Grid.Row centered>
            <h1></h1>
            <h1 className="ui header">To-Do List</h1>
      </Grid.Row>
      <Grid.Row centered>
      <form onSubmit={(e: React.FormEvent<HTMLElement>) => {
          e.preventDefault();
          onCreate();
      }}>
        <input onChange={onChange} value={input} />
        <Button type="submit" color="blue"  size= 'mini' content="ADD" />
      </form>
      </Grid.Row>
      <Grid.Row centered>
      <ul>{todoItemList}</ul>
      
      </Grid.Row>

    </Grid>
  );
};

export default TodoList;
