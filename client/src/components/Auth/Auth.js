import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login'
import { signin, signup } from '../../actions/auth';
import useStyles from './styles'
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Input from './Input'
import Icon from "./icon"

const Auth = () => {


    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    
    const [isSignup, setIsSignup] = useState(false)
    
    const state = null;
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("🚀 ~ file: Auth.js:20 ~ Auth ~ formData", formData)

        if(isSignup) {
            dispatch(signup(formData, history))
        } else {
            dispatch(signin(formData, history))

        }
    } 

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev)
    }

    const switchMode = () => {
        setIsSignup((prev) => !prev)
        setShowPassword(false)
    }

    // const googleSuccess = async (res) => {
    //     console.log(res)
    // }
    
    // const googleFailure = (error) => {
    //     console.log("error", error)
    //     console.log('Google Sign In was unsuccessful. Try again!')
    // }

  return (

    <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5">
                {isSignup ? 'Sign Up' : 'Sign In'}
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                        <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                        <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                                
                            )
                        }

                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                        { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
                    </Grid>

                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    {/* <GoogleLogin 
                        clientId="781203866009-c8qsensgd3l1d2gn97f78c2v4hvs6hlu.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button 
                            className={classes.googleButton} 
                            color='primary' 
                            fullWidth 
                            onClick={renderProps.onClick} 
                            disabled={renderProps.disabled} 
                            startIcon={<Icon />} 
                            variant="contained">
                               Google Sign In 
                            </Button>)}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                
                    /> */}
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>

                
            </Typography>
        </Paper>
    </Container>
  )
}

export default Auth

// 3.12