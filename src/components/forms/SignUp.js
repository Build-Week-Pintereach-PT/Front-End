import React from "react";
import { useForm } from "react-hook-form";
import styled from 'styled-components'

const Form = styled.div`
display:flex;
flex-direction: column;
align-self:flex-end;
width:12vw;
height: 12vh;
border: 2px solid red;
`

const SignUp = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values);
  };

  return (
      
    <form onSubmit={handleSubmit(onSubmit)}>
    <Form>
        <input
            name="username"
            placeholder="Username"
            ref={register({ required: true })}
        />
        {errors.username && errors.username.message}

        <input
            name="email"
            placeholder="Email"
            ref={register({ required: true })}
        />
        {errors.email && errors.email.message}

        <input
            type="password"
            placeholder="Password"
            name="password"
            ref={register({ required: true })}
        />
        {errors.password && errors.password.message}

        <button type="submit">Submit</button>
      </Form>

    </form>
  );
};
export default SignUp;
