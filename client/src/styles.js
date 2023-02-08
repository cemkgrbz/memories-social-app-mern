import { makeStyles } from '@material-ui/core/styles';
import banner from './images/banner.png';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: "column-reverse"
    }
  },
  banner: {
    margin: "2rem",
    border: "1px solid white",
    padding: "3rem",
    color: "white",
    backgroundImage: `url(${banner})`
  }
}));