import React, { useEffect, useState } from "react";
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from "@material-ui/core"; 
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { getPosts } from '../../actions/posts'
import useStyles from '../../styles'
import { Pagination } from "@material-ui/lab";
import { useHistory, useLocation } from "react-router-dom";
import ChipInput from 'material-ui-chip-input'

function Home() {

    const [currentId, setCurrentId] = useState(null)
    console.log("🚀 ~ file: App.js:14 ~ App ~ currentId", currentId)
    console.log("🚀 ~ file: App.js:14 ~ App ~ setCurrentId", setCurrentId)
    const classes = useStyles();
    const dispatch = useDispatch();
  
    useEffect(() => {
  
      dispatch(getPosts());
  
    }, [currentId, dispatch]);

    return ( <>
        <div className={classes.banner}>
        Let's improve our Blog together. Feel free to tell us some road stories!
        </div>
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container
                // direction="column-reverse" 
                justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={8}>
                    <Posts setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                    
                </Grid>
                </Grid>
            </Container>
        </Grow>
    </>
 );
}

export default Home; 