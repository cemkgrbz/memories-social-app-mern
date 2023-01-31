import React from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from "@material-ui/core";
import useStyles from './styles'
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Input from './Input'

const Auth = () => {

    const classes = useStyles()

    const state = null;
    const isSignup = false;

    const handleChange = () => {

    }
    const handleSubmit = () => {

    }

  return (
    <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5">{isSignup ? 'Sign Un' : 'Sign In'}
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Grid xs={6} md={12}>
                                        <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                    </Grid>
                                    <Grid xs={6} md={12}>
                                        <Input name="firstName" label="First Name" handleChange={handleChange} half />
                                    </Grid>
                                </>
                            )
                        }
                    </Grid>
                </form>
            </Typography>
        </Paper>
    </Container>
  )
}

export default Auth

// 3.02