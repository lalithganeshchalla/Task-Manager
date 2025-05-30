import React from 'react'
import '../Styles/SignUp.css';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background.png';
import facebookIcon from '../assets/facebook.svg';
import googleIcon from '../assets/google.svg';
import xIcon from '../assets/x.svg';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import {  Button , 
    Checkbox ,
    Grid,
    TextField
} from '@mui/material';

const SignIn = () => {
  const navigate = useNavigate();
  const signupAction = () => {
    navigate('/signup');
  };
  const dashboardAction = () =>{
    navigate('/dashboard');
  };
 const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
  width: '100%',
  overflow: 'auto',
};
const iconStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '20px',
  },
  text: {
    fontSize: '16px',
    marginRight: '10px',
  },
  icons: {
    display: 'flex',
    gap: '10px',
  },
  icon: {
    width: '32px',
    height: '32px',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  },
};

const perfixColor = {
    color: 'black',
};
  return (
    <div>
      <div style={backgroundStyle}>
         <div className="signin-container">
       <div className="signin-left" >
        <h2 style={{margin:"10px"}}>Sign In</h2>
        <form>
             <TextField 
             style={{margin:"10px"}} 
             id="outlined-basic" 
             type='text' 
             size='small'
             placeholder="Enter UserName" 
             variant="outlined" 
             required 
             fullWidth
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
             id="outlined-basic" 
             type='password' 
             size='small'
             fullWidth
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
             <Grid style={{ display: 'flex' }}>
                <Checkbox color="primary" required/><p>Remember me</p>
                </Grid>
                <Button onClick={dashboardAction} class="btn-style" variant='contained' type="submit" style={{margin:"10px" }}>Login</Button>
               <Grid>
                <div style={iconStyles.container}>
                    <p style={iconStyles.text}>Or, Login with</p>
                    <div style={iconStyles.icons}>
                        <img src={facebookIcon} alt="Facebook" style={iconStyles.icon} />
                        <img src={googleIcon} alt="Google" style={iconStyles.icon} />
                        <img src={xIcon} alt="X" style={iconStyles.icon} />
                     </div>
                </div>
                
                <p>Don't have an account? <Button onClick={signupAction}>Create One</Button></p>


                </Grid>
        </form>
        </div>
        <div className="signin-right" />
    </div>
      </div>
    </div>
  );
}

export default SignIn