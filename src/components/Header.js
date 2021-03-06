import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  link: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.link}>
            <Typography variant="h6">Articles</Typography>
          </Link>
          <Link to="/ArticlesList" className={classes.link}>
            <Typography variant="h6">ArticlesList</Typography>
          </Link>
        </Toolbar>
      </AppBar>
  );
};

export default Header;
