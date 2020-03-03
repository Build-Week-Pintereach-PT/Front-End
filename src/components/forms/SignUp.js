import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
// import axios from 'axios';
import { TweenMax, Power3 } from "gsap";
import "./Signup.css";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  padding: 10px;
  border: 5px solid #beebe9;
  border-radius: 9px;
  box-shadow: 10px 10px 60px 10px black;
`;

const SignUp = () => {
  let signup = useRef();

  const [userData, setUserData] = useState([]);
  const { handleSubmit, register, errors } = useForm([]);

  const onSubmit = (data, e) => {
    setUserData(data);
    console.log("onSubmit data", { data });
    console.log("userData state", { userData });
    e.target.reset();


  };

  // useEffect(() => {
  //   axios
  //     .post(`https://auth-friends-backend.herokuapp.com/`,{userData})
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log("error", error);
  //     });
  // }, [userData]);

  useEffect(() => {
    TweenMax.to(signup, 1, {
      opacity: 1,
      y: 50,
      ease: Power3.easeOut
    });
  }, []);

  const history = useHistory();

  return (
    <Wrapper >
      <FormDiv onSubmit={handleSubmit(onSubmit)} ref={el => {signup = el;}}>
        <form className="signup-form" >
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

          <label>Email</label>
          <input
            name="email"
            placeholder="Email"
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address"
              }
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <p>This field is required</p>
          )}
          {errors.email && errors.email.message}

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            ref={register({ required: true, minLength: 6 })}
          />
          {errors.password && errors.password.type === "required" && (
            <p>This field is required</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p>This field needs to be at least 6 characters long</p>
          )}

          <label>First Name</label>
          <input
            name="fName"
            placeholder="First Name"
            ref={register({ required: false })}
          />

          <label>Last Name</label>
          <input
            name="lName"
            placeholder="Last Name"
            ref={register({ required: false })}
          />

          <label>Field of Study</label>
          <input
            name="study"
            placeholder="Field of Study"
            ref={register({ required: false })}
          />

          <label>Occupation</label>
          <input
            name="occupation"
            placeholder="Occupation"
            ref={register({ required: false })}
          />

          <button type="submit">Submit</button>
          <button
            type="button"
            href="/login"
            onClick={() => {
              history.push("/login");
            }}
          >
            Already Have An Account? Log In!
          </button>
        </form>
      </FormDiv>
    </Wrapper>
  );
};
export default SignUp;
