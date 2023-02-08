import React from "react"
import useStyles from './styles'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import moment from 'moment'
import { useDispatch, useSelector } from "react-redux"
import { deletePost, likePost } from "../../../actions/posts"
import { Link, useHistory } from "react-router-dom"


function Post({ post, setCurrentId }) {

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleDelete = () => {

    dispatch(deletePost(post._id))
  }

  const user = JSON.parse(localStorage.getItem('profile'));

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === (user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };

  console.log(post.message)
  const openPost = () => {
    history.push(`/posts/${post._id}`)

  }

    return ( 
        <Card className={classes.card} raised elevation={6}>

          <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>

          <div className={classes.overlay}>
            <Typography className={classes.author}>{post.name}</Typography>
            <Typography className={classes.author}>{moment(post.createdAt).fromNow()}</Typography>
          </div>
          {(user?.result?._id === post?.creator) && (
          <div className={classes.overlay2}>
            <Button style={{color: 'white'}} size="small" 
              onClick={()=> {setCurrentId(post._id)}}>
              <MoreHorizIcon fontSize="medium" />
            </Button>
          </div>
          )}

          <div className={classes.details}>
            <Typography color="textSecondary">{post.tags.map((tag) => `#${tag}`)}</Typography>
          </div>
          <Typography className={classes.title} gutterBottom onClick={openPost}>{post.title}</Typography>

          <CardContent>
            <Typography className={classes.text} color="textSecondary" component="p"> 
                {post.message.slice(0,300)}...
                <Typography className={classes.readMore} variant="body2" gutterBottom onClick={openPost}>Read more</Typography>            
            </Typography>
          </CardContent>

          <CardActions className={classes.cardActions}>

            <Button size="small" color="primary" disabled={!user?.result} onClick={()=> {dispatch(likePost(post._id))}}>
              <Likes />
            </Button>
            {(user?.result?._id === post?.creator) && (

            <Button size="small" className={classes.readMore} color="primary" onClick={handleDelete}>
              <DeleteIcon fontSize="small"/>
              Delete
            </Button>
            )}
            
          </CardActions>

        </Card>
      );
}

export default Post;

// .filter((item, idx) => idx < 50)