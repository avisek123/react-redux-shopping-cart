import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../redux";
import { StyledHeader } from "../styles/CenterDiv.styled";
function HookBookContainer() {
  const data = useSelector((state) => state.todoReducer);

  const dispatch = useDispatch();
  console.log(data);
  const handleChange = (d) => {
    console.log(d);
  };

  return (
    <StyledHeader>
      <h2>Register</h2>
      <input
        onChange={(e) => dispatch(addTodo({ ...data, result: e.target.value }))}
        type="text"
        value={data?.result}
        placeholder="type name"
      />
      <input
        onChange={(e) => dispatch(addTodo({ ...data, count: e.target.value }))}
        type="text"
        value={data?.count}
        placeholder="type name"
      />
      <button
        onClick={() => {
          handleChange(data);
        }}
      >
        click
      </button>
    </StyledHeader>
  );
}

export default HookBookContainer;
