import  {React, useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { UserAuth } from '../context/AuthContext';
import {GoogleButton} from 'react-google-button'
import { Link, useNavigate } from 'react-router-dom';
import '../css/Loginpage.css';
import { Typography } from '@mui/material';


export default function Loginpage() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    setError('')
    try{
      await signIn(email,password)
    }catch(e){
      setError(e.message)
      console.log(e.message)
    }
  };

  
  const {signIn,googleSignIn, user} = UserAuth();
  const Navigate = useNavigate();
  const handleGoogleSignIn = async () =>{
    try{
      await googleSignIn();
    }catch(error){
      console.log(error)
    }
  };

  useEffect(() =>{
    if(user != null){
      Navigate('/')
    }
  },[user,Navigate])

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 8,
        }}
      >
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
        <TextField
        onChange={(e)=> setEmail(e.target.value)}
          type="email"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
        />
        <TextField
        onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Typography>you don't have accout yet ? click here to <Link to='/register'>Register Now</Link></Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button> 
        </form>
        <GoogleButton  onClick={handleGoogleSignIn} />
        
      </Box>
    </Container>
  );
}
