import React from 'react';

//using React Hook Form for validation
import { useForm } from 'react-hook-form'

//import material ui styles
import { Button, TextField}  from '@material-ui/core/'

export default function Login() {
    // properties the hook returns
    const { register, handleSubmit, errors } = useForm();

    // used to handle the form submission and get the filled data.
    function onSubmit(data) {
        console.log("Data submitted: ", data);
      }


    return (
        <div className="login-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="inputEmail">E-mail:&nbsp;&nbsp;
          <TextField
            type="email"
            id="inputEmail"
            name="email"
            ref={register({
                required: "Enter your e-mail",
                pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Enter a valid e-mail address",
                },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
          </label>
            <br />
          <label htmlFor="inputPassword">Password:&nbsp;&nbsp;
          <TextField
            type="password"
            id="inputPassword"
            name="password"
            ref={register({
                required: "You must specify a password" })}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}
          </label>
            <br />
          <Button type="submit">Login</Button>
        </form>
      </div>
    )
}