import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const NewArticleInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function NewArticle() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <NewArticleInputs>
        <label>Article Name</label>
        <input
          type="text"
          name="Article Name"
          ref={register({ required: true, max: 13, min: 3, maxLength: 25 })}
        />

        <label>Article Link</label>
        <input
          type="url"
          name="Article Link"
          ref={register({ required: true})}
        />

        <label>Article Description</label>
        <textarea
          name="Article Description"
        />
        <input type="submit" />
      </NewArticleInputs>
    </form>
  );
}
