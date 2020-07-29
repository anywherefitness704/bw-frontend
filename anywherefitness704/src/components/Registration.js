import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { BASE_URL } from "../constants/index";
// import { useForm, Controller } from "react-hook-form";

//styles from material-ui
import { makeStyles } from "@material-ui/core/styles"; //to be able to pull in styled-components
import CssBaseline from "@material-ui/core/CssBaseline"; //shortcut on CSS
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import styled from "styled-components";

// function to add our own styles to material-ui theme
const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// function Registration(props) {
//   //Setting Use States
//   const [state, setState] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//     userType: "",
//     successMessage: null,
//   });

//   //React Hook Forms
//   const { handleSubmit, register, control } = useForm();

//   //define variable to use custom styles in material-ui
//   const classes = useStyles();

//   //FORM ACTIONS
//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setState((prevState) => ({
//       ...prevState,
//       [id]: value,
//     }));
//   };
//   const sendDetailsToServer = () => {
//     if (state.email.length && state.password.length && state.userType.length) {
//       props.showError(null);
//       const payload = {
//         email: state.email,
//         password: state.password,
//         userType: state.userType,
//       };
//       console.log(payload);
//       axios
//         .post(BASE_URL + "/api/auth/register", payload)
//         .then(function (response) {
//           if (response.data.code === 200) {
//             setState((prevState) => ({
//               ...prevState,
//               successMessage:
//                 "Registration successful. Redirecting to home page..",
//             }));
//             //sends user to dashboard upon successful login
//             redirectToHome();
//             props.showError(null);
//           } else {
//             props.showError("Some error ocurred");
//           }
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//     } else {
//       props.showError("Please enter valid email and password");
//     }
//   };
//   const redirectToHome = () => {
//     props.history.push("/dashboard");
//   };

//   const handleSubmitClick = (e) => {
//     e.preventDefault();
//     if (state.password === state.confirmPassword) {
//       sendDetailsToServer();
//     } else {
//       props.showError("Passwords do not match");
//     }
//   };
//   function onSubmit(data) {
//     console.log("Data submitted: ", data);
//   }
//   return (
//     <Container className="registration-container" maxWidth="sm">
//       <CssBaseline />
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="registration-form">
//           <h3>Input your information below to get started</h3>
//           <Controller
//             as={TextField}
//             name="email"
//             control={control}
//             defaultValue=""
//             type="email"
//             variant="outlined"
//             required
//             fullWidth
//             id="inputEmail"
//             label="Email Address"
//             value={state.email}
//             onChange={handleChange}
//             autoFocus
//             inputRef={register({
//               required: "Enter your e-mail",
//               pattern: {
//                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
//                 message: "Enter a valid e-mail address",
//               },
//             })}
//           />
//           <br />
//           <Controller
//             as={TextField}
//             name="inputPassword"
//             control={control}
//             defaultValue=""
//             type="password"
//             variant="outlined"
//             required
//             fullWidth
//             id="inputPassword"
//             label="Create Password"
//             value={state.password}
//             onChange={handleChange}
//             autoFocus
//             inputRef={register({
//               required: "You must specify a password",
//             })}
//           />
//           <Controller
//             as={TextField}
//             name="confirmPassword"
//             control={control}
//             defaultValue=""
//             type="password"
//             variant="outlined"
//             required
//             fullWidth
//             id="confirmPassword"
//             label="Confirm Password"
//             value={state.confirmPassword}
//             onChange={handleChange}
//             autoFocus
//             inputRef={register({
//               required: "You must specify a password",
//             })}
//           />
//           <br />
//           <InputLabel>What are you looking for?</InputLabel>
//           <Select
//             name="userType"
//             defaultValue=""
//             type="select"
//             id="userType"
//             label="User Type"
//             variant="outlined"
//             required
//             fullWidth
//             value={state.selectValue}
//             onChange={handleChange}
//             inputRef={register}
//           >
//             <MenuItem selected value={"Select One"}>
//               Select One
//             </MenuItem>
//             <MenuItem value={"student"}>
//               I'm interested in taking classes.
//             </MenuItem>
//             <MenuItem value={"instructor"}>
//               I'm interested in teaching classes.
//             </MenuItem>
//           </Select>
//         </div>
//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           color="primary"
//           className={classes.submit}
//           onClick={handleSubmitClick}
//         >
//           Register
//         </Button>
//       </form>
//       <div className="registration-footer">
//         <span>Already have an account? </span>
//         <Link to="/login" name="login">
//           Login here
//         </Link>
//       </div>
//     </Container>
//   );
// }

const initialFormState = {
  name: "",
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
  userType: "",
};

const Registration = (props) => {
  const [state, setState] = useState(initialFormState);
  const history = useHistory();

  const handleChanges = (e) => {
    console.log(e.target.value);
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };
  const handleSelect = (e) => {
    console.log(e.target.value);
    setState({
      ...state,
      userType: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: state.name,
      email: state.email,
      username: state.username,
      password: state.password,
      role: state.userType,
    };
    axios
      .post(BASE_URL + "/api/auth/register", payload)
      .then((res) => {
        console.log(
          "Success boss! The network request to register returned successful!"
        );
        history.push("/login");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <RegistrationContainer>
      <StyledForm>
        <h2>Register</h2>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          value={state.name}
          onChange={handleChanges}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          onChange={handleChanges}
        />
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          onChange={handleChanges}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          onChange={handleChanges}
        />
        <TextField
          id="confirmPassword"
          label="Confirm password"
          variant="outlined"
          type="password"
          onChange={handleChanges}
        />
        <Select
          onChange={handleSelect}
          variant="outlined"
          value={state.userType}
          id="userType"
          defaultValue=""
        >
          {/* <option aria-label="None" value="" /> */}
          <option value="student">I would like to learn!</option>
          <option value="instructor">I'm here to teach!</option>
        </Select>
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Register
        </Button>
      </StyledForm>
    </RegistrationContainer>
  );
};

export default Registration;

const RegistrationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;

  * {
    margin: 1% 0;
  }
`;
