import React, { useEffect, useState } from "react";
import { Container, Grow, Grid, Paper } from "@material-ui/core"; 
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { getPosts } from '../../actions/posts'
import useStyles from '../../styles'
import { Pagination } from "@material-ui/lab";


function Home() {

    const [currentId, setCurrentId] = useState(null)
    console.log("🚀 ~ file: App.js:14 ~ App ~ currentId", currentId)
    console.log("🚀 ~ file: App.js:14 ~ App ~ setCurrentId", setCurrentId)
    const classes = useStyles();
    const dispatch = useDispatch();
  
    useEffect(() => {
  
      dispatch(getPosts());
  
    }, [currentId, dispatch]);

    return ( 
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container
                // direction="column-reverse" 
                justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                    <Posts setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                    <Paper className={classes.pagination} elevation={6}>
                        <Pagination />
                    </Paper>
                </Grid>
                </Grid>
            </Container>
        </Grow>
     );
}

export default Home; 