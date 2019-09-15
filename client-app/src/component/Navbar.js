import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../assets/logo.jpg'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    }
});

class Navbar extends Component {

    render() {
        const { classes } = this.props
        return (
            <div>
                <div className={classes.root}>
      <AppBar position="static" style={{ background: '#060808' , color : '#febd00'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography class="ml-4 mt-2" variant="h4" className={classes.title}>
            <img src={logo} style={{height:"80px",width:"160px"}}/>
          </Typography>
          <Typography class="ml-4" variant="h4" className={classes.title}>
            Home
          </Typography>
          <Typography class="ml-4" variant="h5" className={classes.title}>
            Services
          </Typography>
          <Typography class="ml-4" variant="h5" className={classes.title}>
            About Us
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
            </div>
        );
    }
}
Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);