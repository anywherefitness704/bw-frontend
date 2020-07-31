import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios';
import { useForm } from 'react-hook-form';

//importing styles from Material UI
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline'; //shortcut on CSS
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
      background: '#679B9B',
      border: '#679B9B',
      color: '#FFF'
    },
    header: {
      textAlign: 'center',
      background: '#679B9B',
      color: '#FFF'
    },
    card: {
      marginTop: theme.spacing(10)
    }

  }),
);


const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [helperText, setHelperText] = useState('');
  const [error, setError] = useState(false);
  const [quotes, setQuotes] = useState('')
  const { register } = useForm();
  //uses URL history to push to dashboard upon successful auth
  const history = useHistory()
  const routeToDashboard = () => {
    history.push('/dashboard')
}

  useEffect(() => {
    if (email.trim() && password.trim()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, password]);

  const handleLogin = () => {
    if (email === 'abc@email.com' && password === 'password') {
        setError(false);
        alert(`You logged in successfully with the email ${email} and password ${password}`);
        routeToDashboard(); //sends user to dashboard after auth
      } else {
        setError(true);
        setHelperText('Email and Password credentials do not match our system. Please try again.')
      }
    };
  
  //handles if user presses enter key instead of clicking on submit
  const handleKeyPress = (e:any) => {
    if (e.keyCode === 13 || e.which === 13) {
      isButtonDisabled || handleLogin();
    }
  };

  //example of get request for mvp
  const getKanye = () => {
    axios.get('https://api.kanye.rest/?format=text')
      .then(response => {
        console.log(response)
        setQuotes(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => getKanye(), [])

  return (
    <React.Fragment>
        <CssBaseline />
      <form className={classes.container} noValidate autoComplete="off">
        <Card className={classes.card}>
          <CardHeader className={classes.header} title="Kanye Says:" />
          <StyledQuoteDiv>
          <span><StyledImg src="https://www.pngkit.com/png/detail/17-172367_kanye-west-png-pic-kanye-west-face-png.png" alt="Kanye Face"/></span>
          <StyledBlockQuote>{quotes}</StyledBlockQuote>
          </StyledQuoteDiv>
        </Card>
        <Card className={classes.card}>
          <CardHeader className={classes.header} title="Welcome Back!" />
          <CardContent>
            <div>
            <h3> Enter Your Details Below</h3>
              <TextField
                variant="outlined"
                required
                error={error}
                fullWidth
                autoFocus
                id="email"
                type="email"
                label="Enter Your Email"
                placeholder="Email"
                margin="normal"
                onChange={(e)=>setEmail(e.target.value)}
                onKeyPress={(e)=>handleKeyPress(e)}
                inputRef={register({
                  required: "Enter your e-mail",
                  pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Enter a valid e-mail address",
                  },
              })}
              />
              <TextField
                variant="outlined"
                required
                error={error}
                fullWidth
                autoFocus
                id="password"
                type="password"
                label="Enter Your Password"
                placeholder="Password"
                margin="normal"
                helperText={helperText}
                onChange={(e)=>setPassword(e.target.value)}
                onKeyPress={(e)=>handleKeyPress(e)}
                inputRef={register({
                  required: "You must specify a password" })}
              />
            </div>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              className={classes.loginBtn}
              onClick={()=>handleLogin()}
              disabled={isButtonDisabled}>
              Login
            </Button>
          </CardActions>
        </Card>
      </form>
      <StyledDiv className="registerMessage">
        <span>Dont have an account? </span>
        <Link to="/registration">Register</Link>
      </StyledDiv>
    </React.Fragment>
  );
}

export default Login;

const StyledDiv = styled.div`
  padding: 1rem;
  text-decoration: none;
`;


const StyledImg = styled.img`
  width: 75%;
  height: auto;
  text-decoration: none;
`;




const StyledQuoteDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-evenly;
`;

const StyledBlockQuote = styled.blockquote`
  width: 100%;
  font-style: italic;
  font-size: 1rem;
`;