import React from 'react';
import '../Styles/SignIn.css';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background.png';
import {  Button ,
          Checkbox , 
          Grid ,
    InputAdornment } from '@mui/material';
import { TextField } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import LockOutlinedIcon from '@mui/icons-material/LockOpen';

const SignUp = () => {
  const navigate = useNavigate();
  const loginAction = () => {
    navigate('/');
  };
  const style = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
  width: '100%',
  overflow: 'auto',
};
  const perfixColor = {
    color: 'black',
  };
  return (
    <div>
      <div style={style}>
         <div className="signup-container">
      <div className="signup-left" />
      <div className="signup-right" style={{padding:"20px", marginTop:"60px"}}>
        <h2 style={{marginLeft:"10px"}}>Sign Up</h2>
        
        <form>
           
           <TextField
      style={{ margin: "10px" }}
      size="small"
      id="outlined-basic"
      type="text"
      placeholder="Enter First Name"
      variant="outlined"
      required
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <PersonIcon style={perfixColor} />
          </InputAdornment>
        ),
      }}
    />
           <TextField 
           style={{margin:"10px"}} 
           size='small' 
           id="outlined-basic" 
           type='text' 
           placeholder="Enter Last Name" 
           variant="outlined" 
           required
           InputProps={{
             startAdornment: (
               <InputAdornment position="start">
                 <PersonIcon style={perfixColor} />
               </InputAdornment>
             ),
           }}
           />
           <TextField 
           style={{margin:"10px"}} 
           id="outlined-basic" 
           type='text'
           size='small'
           placeholder="Enter UserName" 
           variant="outlined" 
           required
           InputProps={{
             startAdornment: (
               <InputAdornment position="start">
                 <AccountCircle style={perfixColor} />
               </InputAdornment>
             ),
           }}
           />
           <TextField 
           style={{margin:"10px"}} 
           size='small' 
           id="outlined-basic" 
           type='email'  
           placeholder="Enter Email" 
           variant="outlined" 
           required
           InputProps={{
             startAdornment: (
               <InputAdornment position="start">
                 <EmailIcon style={perfixColor} />
               </InputAdornment>
             ),
           }}
           />
           <TextField 
           style={{margin:"10px"}} 
           size='small' 
           id="outlined-basic" 
           type='password' 
           label="Password" 
           placeholder="Enter Password" 
           variant="outlined" 
           required
           InputProps={{
             startAdornment: (
               <InputAdornment position="start">
                 <LockIcon style={perfixColor} />
               </InputAdornment>
             ),
           }}
           />
           <TextField 
           style={{margin:"10px"}} 
           size='small' 
           id="outlined-basic" 
           type='password' 
           label="Confirm Password" 
           placeholder="Confirm Password" 
           variant="outlined" 
           required
           InputProps={{
             startAdornment: (
               <InputAdornment position="start">
                 <LockOutlinedIcon style={perfixColor} />
               </InputAdornment>
             ),
           }}
           />
           
           <Grid style={{ display: 'flex' }}>
                    <Checkbox style={{margin:"10px"}} color="primary" required/><p>I agree to all terms</p>
                </Grid>
           <Button onClick={loginAction} class="btn-style" style={{marginLeft:"10px"}} variant="contained">Register</Button>
           <Grid>
            <p>Already have an account? <Button onClick={loginAction}>Login</Button></p>
           </Grid>
        </form>
        
      </div>
    </div>
      </div>
    </div>
  );
};export default SignUp;