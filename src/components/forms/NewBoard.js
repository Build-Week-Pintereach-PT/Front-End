import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const NewBoardInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function NewBoard() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = function(data, e) {
    console.log(data);
    console.log(errors);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <NewBoardInputs>
        <label>Board Name</label>
        <input
          type="text"
          name="Description"
          ref={register({ max: 25, min: 2, maxLength: 50 })}
        />
        <label>Description</label>
        <textarea
          name="Board Name"
          ref={register({ required: true, max: 100, min: 5 })}
        />
        <input type="submit" />
      </NewBoardInputs>
    </form>
  );
}
