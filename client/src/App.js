import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"; 
import { useDispatch } from "react-redux";
import { getPosts } from './actions/posts'
import memories from "./images/memories.png"
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from './styles'
// import './index.css'

function App() {

  const [currentId, setCurrentId] = useState(null)
  console.log("🚀 ~ file: App.js:14 ~ App ~ currentId", currentId)
  console.log("🚀 ~ file: App.js:14 ~ App ~ setCurrentId", setCurrentId)
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getPosts());

  }, [currentId, dispatch]);

  return (
    <div>
      {/* <h1 className="text-center">Hello</h1> */}
      <Container maxwidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
          <img className={classes.image} src={memories} alt="logo" height={'60'}/>

        </AppBar>
        <Grow in>
          <Container className="">
            <Grid className={classes.grid} 
            // container justifyContent= "space-between" alignItems= "stretch" spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId}/>
              </Grid>

              <Grid item xs={12} sm={7}>
                <Form currentId={currentId}/>

              </Grid>
            </Grid>
          </Container>
        </Grow>

      </Container>
    </div>
  );
}

export default App;
