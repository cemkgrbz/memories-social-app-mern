import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  header: {
      fontFamily:
        'Josefin Sans',
      fontSize: '3rem',
  },

  author: {
    fontFamily: 'Josefin Sans',
    fontSize: '1.5rem',

  },

  text: {
    fontFamily: 'Josefin Sans',

  },
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '40%',
    maxHeight: '600px',

  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
    fontFamily:
        'Josefin Sans'
   
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  commentsInnerContainer: {
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px',
  },
}));