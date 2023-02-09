import React, { useState, useRef } from 'react';
import { Typography, TextField, Button } from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import { commentPost } from '../../actions/posts';
import useStyles from './styles';

const CommentSection = ( {post} ) => {
    console.log("🚀 ~ file: CommentSection.jsx:8 ~ CommentSection ~ post", post)
    
    const classes = useStyles()
    const [comments, setComments] = useState([])
    console.log("🚀 ~ file: CommentSection.jsx:11 ~ CommentSection ~ comments", comments)
    const [comment, setComment] = useState('')
    const user = JSON.parse(localStorage.getItem('profile'))
    const dispatch = useDispatch()

    const handleClick = async () => {

        const finalComment = `${user.result.name}: ${comment}`
        dispatch(commentPost(finalComment, post._id))

        const newComments = await dispatch(commentPost(finalComment, post._id))

        setComments(newComments)
        // setComment('')
    }

    return (
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography gutterBottom variant='h6'>Comments</Typography>
                    {/* {comments.map((comment,i) => (
                        <Typography key={i} gutterBottom variant='subtitle1'>
                            {comment}
                        </Typography>
                    ))} */} {comments}
                </div>
                {user?.result?.name && (
                <div style={{ width: '70%' }}>
                    <Typography gutterBottom variant='h6'>Write a comment</Typography>
                    <TextField 
                        fullWidth
                        minRows={4}
                        variant="outlined"
                        label="Comment"
                        multiline
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        />
                    <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment} variant="contained" color="secondary" onClick={handleClick}>
                        Comment
                    </Button>
                </div>
                )}
            </div>
        </div>
  )
}

export default CommentSection