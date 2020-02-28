import React from "react";
import { useForm } from "react-hook-form";
import styled from 'styled-components'

const Form = styled.div`
display:flex;
flex-direction: column;
align-items:center;
`

const Login = () => {
  const { handleSubmit, register, errors, reset } = useForm();
  const onSubmit = (values, e) => {
    console.log(values);
    e.target.reset()
  };

  return (
      
    <form onSubmit={handleSubmit(onSubmit)}>
    <Form>
        <label>Email</label>
        <input
            name="email"
            placeholder="Email"
            ref={register({ required: true })}
        />
        {errors.email && errors.email.type === 'required' && <p>This field is required</p>
        }

        <label>Password</label>
        <input
            type="password"
            placeholder="Password"
            name="password"
            ref={register({ required: true })}
        />
        {errors.password && errors.password.type === 'required' && <p>This field is required</p>
        }

        <button type="submit">Submit</button>
      </Form>

    </form>
  );
};
export default Login;
