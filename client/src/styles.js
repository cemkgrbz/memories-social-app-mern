import { makeStyles } from '@material-ui/core/styles';
import banner from './images/bg-banner.jpg';

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
    padding: "1rem",
    color: "#4F0317",
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    textAlign: "center",
    fontSize: "1.5rem",
    borderRadius: "10px",
    textShadow: '1px 1px 5px #FFC2D7'
  },
  span: {
    backgroundColor: "#F6F6F4"
  }
}));