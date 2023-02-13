import { makeStyles } from "@material-ui/core";
import yellow from "@material-ui/core/colors/yellow";

export default makeStyles(() => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(32),
      height: theme.spacing(16),
    },
  },
  ul: {
    justifyContent: "space-around",
  },
  yellowPaper: {
    backgroundColor: yellow[300],
  },
}));
