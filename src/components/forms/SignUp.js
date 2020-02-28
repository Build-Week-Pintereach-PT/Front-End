import React from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
     <input
            name="username"
            ref={register({required: true})}
        />
        {errors.username && errors.username.message}

      <input
        name="email"
        ref={register({required: true})}
      />
      {errors.email && errors.email.message}

      <input type="password" 
      placeholder="password" 
      name="password" 
      ref={register({required: true})}        
      />
      {errors.password && errors.password.message}

      <button type="submit">Submit</button>
    </form>
  );
};
export default SignUp;