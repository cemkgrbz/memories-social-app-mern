import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',

  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
    cursor:"pointer",
    fontFamily: 'Josefin Sans',
    fontSize: '1.5rem'
  },

  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  readMore: {
    fontSize: "1rem",
    fontWeight: "bold",
    marginTop: "1rem",
    textAlign: "right",
    cursor:"pointer",
    fontFamily: 'Josefin Sans',
  },
  text: {
    fontFamily: 'Josefin Sans',
  },
  author: {
    fontFamily: 'Josefin Sans',
    fontSize: '1.3rem'
  }
});