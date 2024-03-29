import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

function Posts({ setCurrentId }) {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log("🚀 ~ file: Posts.js:10 ~ Posts ~ posts", posts);

  return (
    <>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {posts
            .slice(0)
            .reverse()
            .map((post) => (
              <Grid key={post._id} item xs={12} sm={12} md={6} lg={6}>
                <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
            ))}
        </Grid>
      )}
    </>
  );
}

export default Posts;
