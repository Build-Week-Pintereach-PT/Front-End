import React, { useRef,useState, useEffect, useHistory} from "react";
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import { connect } from "react-redux"
import { login } from '../../actions/index'
// import axios from 'axios'
import { TweenMax, Power3 } from 'gsap';
import './Login.css'

const Wrapper = styled.div`
display:flex;
justify-content:center;
`
const FormDiv = styled.div`
display:flex;
flex-direction: column;
width: 30vw;
padding: 10px;
border: 5px solid #beebe9;
border-radius: 9px;
box-shadow:10px 10px 60px 10px black;
`


const Login = (props) => {
  let login = useRef()
  
  useEffect(() => {
    TweenMax.to(
      login,
      1,
      {
        opacity:1,
        y:100,
        ease: Power3.easeOut
      }
      )},[])


  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values, e) => {
    props.login(values);
    props.history.push("/dashboard")
    console.log(values);
    e.target.reset()
  };

  return (
      <Wrapper>
    <FormDiv ref={el => {login = el}} onSubmit={handleSubmit(onSubmit)}>
    <form className='login-form'>
      <label>Login: </label>
        {/* <label>Email</label>
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
        {errors.email && errors.email.message} */}
        <label>User Name</label>
          <input
            name="username"
            placeholder="Username"
            ref={register({ required: true, minLength: 2 })}
          />
          {errors.username && errors.username.type === "required" && (
            <p>This field is required</p>
          )}
          {errors.username && errors.username.type === "minLength" && (
            <p>This field needs to be at least 2 characters long</p>
          )}

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
      </form>

    </FormDiv>
    </Wrapper>
  );
      };

    const mapStateToProps = state => ({
      isLoggingIn: state.isLoggingIn
    });
export default connect(
  mapStateToProps,
  { login }
)(Login);
