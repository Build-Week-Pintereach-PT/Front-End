import React from "react";
import { useForm } from "react-hook-form";
import styled from 'styled-components'

const Form = styled.div`
display:flex;
flex-direction: column;
align-items:center;
`

const SignUp = () => {
  const { handleSubmit, register, errors } = useForm([]);
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset()

  };

  return (
      
    <form onSubmit={handleSubmit(onSubmit)}>
    <Form>
        <label>User Name</label>
        <input
            name="username"
            placeholder="Username"
            ref={register({ required: true,
            minLength: 2 })}
        />
        {errors.username && errors.username.type === 'required' && <p>This field is required</p>
        }
        {errors.username && errors.username.type === 'minLength' && <p>This field needs to be at least 2 characters long</p>
        }

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
            ref={register({ required: true, minLength: 6 })}
        />
        {errors.password && errors.password.type === 'required' && <p>This field is required</p>
        }
        {errors.password && errors.password.type === 'minLength' && <p>This field needs to be at least 6 characters long</p>
        }

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
      </Form>

    </form>
  );
};
export default SignUp;
