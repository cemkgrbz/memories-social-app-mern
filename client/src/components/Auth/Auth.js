import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from "@material-ui/core";
import useStyles from './styles'
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Input from './Input'

const Auth = () => {

    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)

    const [isSignup, setIsSignup] = useState(false)

    const state = null;

    const handleChange = () => {

    }
    const handleSubmit = () => {

    }

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev)
    }

    const switchMode = () => {
        setIsSignup((prev) => !prev)
        handleShowPassword(false)
    }

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
                                        <Input name="firstName" label="First Name" handleChange={handleChange} half />
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
                    <Grid container justify="flex-end">
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