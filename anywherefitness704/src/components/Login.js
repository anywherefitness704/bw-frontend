import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../constants/index'
//using React Hook Form for validation
import { useForm, Controller } from 'react-hook-form'


//importing material-ui design styles
import { makeStyles } from '@material-ui/core/styles'; //to be able to pull in styled-components
import CssBaseline from '@material-ui/core/CssBaseline'; //shortcut on CSS
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  //FORM ACTIONS
  

export default function Login (props) {
    // properties react hook form returns
    const { handleSubmit, register, errors, control } = useForm();

    //define variable to use styles
    const classes = useStyles();

    const [state , setState] = useState({
        email : "",
        password : "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        alert('Login Details Submitted: ' + state.email + state.password);
        e.preventDefault();
        const payload={
            "email":state.email,
            "password":state.password,
        }
        axios.post(BASE_URL+'login', payload)
            .then(function (response) {
                if(response.data.code === 200){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Login successful. Redirecting to home page..'
                    }))
                    console.log(response.data)
                    props.showError(null)
                }
                else if(response.data.code === 204){
                    props.showError("email and password do not match");
                }
                else{
                    props.showError("Email does not exists");
                }
            })
            .catch(function (error) {
                console.log('This is a login error' + error);
            });
    }

    // used to test for handling the form submission and get the filled data.
    // function onSubmit(data) {
    //     console.log("Data submitted: ", data);
    //   }


    return (
        <Container maxWidth="xs">
        <CssBaseline />
        <form className={classes.form} noValidate onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
        <Controller as={TextField} control={control} defaultValue=""
            variant="outlined"
            margin="normal"
            type="email"
            required
            fullWidth
            id="inputEmail"
            label="Email Address"
            value={state.email || ''}
            name="email"
            onChange={handleChange}
            autoFocus
            inputRef={register({
                required: "Enter your e-mail",
                pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Enter a valid e-mail address",
                },
            })}
            />
          <br />
          <div>
          {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
            <br />
            <Controller as={TextField} control={control} defaultValue=""
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="password"
            name="password"
            id="inputPassword"
            label="Password"
            value={state.password || ''}
            onChange={handleChange}
            autoFocus
            inputRef={register({
                required: "You must specify a password" })}
          />
          <br />
          <FormControlLabel 
          control={<Checkbox inputRef={register} name="remember" color="primary" defaultValue={false} />}
          label ="Remember me"
          />
          <div>
          {errors.password && <p className="error">{errors.password.message}</p>}
          </div>
            <br />
          <Button 
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmitClick}
            >
                Login
                </Button>
        </form>
        <div className="alert-success" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
        </div>
        <div className="registerMessage">
                <span>Dont have an account? </span>
                <Link to="/registration">Register</Link>
            </div>
        </Container>
    )
}