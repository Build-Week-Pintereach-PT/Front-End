import React, {useState} from "react";
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import axios from 'axios'

const Form = styled.div`
display:flex;
flex-direction: column;
align-items:center;
`

const Login = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values, e) => {
  //   axios.post('/login', values)
  //   .then(res => {
  //     console.log(res)
  //     localStorage.setItem("token", res.data.payload)
  //     // history.push('/dashboard')
  //   })
  //   .catch(err => console.log(err))
  // }
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
            ref={register({ 
              required: true,
              pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "invalid email address"
                } })}
        />
        {errors.email && errors.email.type === 'required' && <p>This field is required</p>
        }
        {errors.email && errors.email.message}

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
