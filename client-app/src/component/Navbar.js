import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import SaveIcon from '@material-ui/icons/Save';
import classNames from 'classnames';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import TextField from '@material-ui/core/TextField'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
// import Colors from 'material-ui/styles/colors';


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
          <Typography class="ml-4" variant="h5" className={classes.title}>
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