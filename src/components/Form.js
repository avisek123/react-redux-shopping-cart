import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addForm } from "../redux";
import { StyledHeader } from "../styles/CenterDiv.styled";

function Form() {
  const data = useSelector((state) => state.form);
  console.log(data);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <StyledHeader>
      <h1>Form</h1>
      <input
        type="text"
        value={data?.response}
        onChange={(e) =>
          dispatch(addForm({ ...data, response: e.target.value }))
        }
        placeholder="Name"
      />
      <button onClick={() => handleChange(data)}>Submit</button>
    </StyledHeader>
  );
}

export default Form;
