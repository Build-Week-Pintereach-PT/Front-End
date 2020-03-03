import React, { useRef,useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import axios from 'axios'
import { TweenMax, Power3 } from 'gsap';

const Wrapper = styled.div`
display:flex;
justify-content:center;
`
const FormDiv = styled.div`
display:flex;
flex-direction: column;
justify-content: flex-start;
width: 30vw;
padding: 10px;
border: 5px solid #beebe9;
border-radius: 9px;
box-shadow:10px 10px 60px 10px black;
`
const Form = styled.div`
display:flex;
flex-direction: column;
align-items:center;
`

const Login = () => {

  let login = useRef()
  
  useEffect(() => {
    TweenMax.to(
      login,
      2,
      {
        opacity:1,
        y:100,
        ease: Power3.easeOut
      }
      )},[])


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
      <Wrapper>
    <FormDiv ref={el => {login = el}} onSubmit={handleSubmit(onSubmit)}>
    <Form >
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

    </FormDiv>
    </Wrapper>
  );
      };
export default Login;
