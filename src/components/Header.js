import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

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
          <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
          </IconButton>
          <Link to="/" className={classes.link}>
            <Typography variant="h6">ArticlesList</Typography>
          </Link>
          <Link to="/Articles" className={classes.link}>
            <Typography variant="h6">Articles</Typography>
          </Link>
            <Button color="inherit">Signup</Button>
        </Toolbar>
      </AppBar>
  );
};

export default Header;
