import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

//importing styles from Material UI
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel'
import CssBaseline from '@material-ui/core/CssBaseline';
import styled from 'styled-components'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1,
      background: '#1C0C26',
      border: '#1C0C26',
      color: "#FFF"
    },
    header: {
      textAlign: 'center',
      background: '#1C0C26',
      color: '#FFF'
    },
    card: {
      marginTop: theme.spacing(10)
    }

  }),
);


const Registration = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [helperText, setHelperText] = useState('');
  const [error, setError] = useState(false);
  //uses URL history to push to dashboard upon successful signup
  const history = useHistory()
  const routeToDashboard = () => {
    history.push('/dashboard')
}
  useEffect(() => {
    if (email.trim() && password.trim() && userType) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, password, userType]);

  const handleSignUp = (evt) => {
    const newUser = {
      email:email.trim(),
      password: password.trim(),
      userType: userType,
    }
    if (!newUser.email|| !newUser.password || !newUser.userType ) {
      setError(true);
      setHelperText('Invalid email or password')
    }  else {
      axios.post('https://reqres.in/api/users', { newUser })
      .then(res=>{
        console.log(res);
        console.log(res.data);
      })
      setError(false);
      alert(`Registered Successfully with the email ${email} and password ${password} and your user type is: ${userType}`);
      routeToDashboard(); //sends user to dashboard after successful signup
    }
  }
    
  //handles if user presses enter key instead of clicking on submit
  const handleKeyPress = (e:any) => {
    if (e.keyCode === 13 || e.which === 13) {
      isButtonDisabled || handleSignUp();
    }
  };


  return (
    <React.Fragment>
        <CssBaseline />
      <form className={classes.container} noValidate autoComplete="off">
        <Card className={classes.card}>
          <CardHeader className={classes.header} title="Sign Up" />
          <CardContent>
            <div>
                <h3> Create Your Account to Get Started.</h3>
              <TextField
                variant="outlined"
                required
                error={error}
                fullWidth
                autoFocus
                id="email"
                type="email"
                label="Enter Your Email Address"
                placeholder="Email"
                margin="normal"
                onChange={(e)=>setEmail(e.target.value)}
                onKeyPress={(e)=>handleKeyPress(e)}
              />
              <TextField
                variant="outlined"
                required
                error={error}
                fullWidth
                autoFocus
                id="password"
                type="password"
                label="Choose A Password"
                placeholder="Password"
                margin="normal"
                helperText={helperText}
                onChange={(e)=>setPassword(e.target.value)}
                onKeyPress={(e)=>handleKeyPress(e)}
              />
              <InputLabel>Are you looking to teach or take gym classes?</InputLabel>
              <br />
              <Select
                required
                error={error}
                fullWidth
                autoFocus
                id="userType"
                type="userType"
                label="userType"
                placeholder="User Type"
                helperText={helperText}
                onChange={(e)=>setUserType(e.target.value)}
                onKeyPress={(e)=>handleKeyPress(e)}>
                    <MenuItem selected value={''}>Select One</MenuItem>
                    <MenuItem value={'student'}>I'm interested in taking classes.</MenuItem>
                    <MenuItem value={'instructor'}>I'm interested in teaching classes.</MenuItem>
                </Select>
            </div>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              className={classes.loginBtn}
              onClick={()=>handleSignUp()}
              disabled={isButtonDisabled}>
              Register Now
            </Button>
          </CardActions>
        </Card>
      </form>
      <StyledDiv className="registration-footer">
        <span>Already have an account? </span>
        <Link to="/login" name="login">Login here</Link>
        </StyledDiv>
    </React.Fragment>
  );
}

export default Registration;

const StyledDiv = styled.div`
  padding: 1rem;
  text-decoration: none;
`;
