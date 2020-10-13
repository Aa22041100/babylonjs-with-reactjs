import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, Divider, ListItemText, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import PlayIcon from '@material-ui/icons/PlayArrow';

const navStyles = {
    root: {
      flexGrow: 1,
    },
    drawer: {
        width: 259,
    },
    title: {
      flexGrow: 1,
    },
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
    }
};

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        };
    }    

    navigateToHome() {
        window.open('/', '_self');
    }

    navigateToDemo() {
        window.open('/demo', '_self');
    }

    toggleDrawer = (pageName, isOpen) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        if( pageName === "Home" ) {
            this.navigateToHome();
        } else if( pageName === "Demo" ) {
            this.navigateToDemo();
        }
        this.setState({showMenu: isOpen});
    }    

    render() {
        // const navStyles = navStyles();
        return(
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton edge="start" style={navStyles.menuButton} color="inherit" aria-label="menu" onClick={this.toggleDrawer('', true)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={navStyles.title}>
                        Babylon Demo
                    </Typography>
                </Toolbar>
                <Drawer open={this.state.showMenu} onClose={this.toggleDrawer('', false)}>
                    <div style={navStyles.drawerHeader}>
                        <IconButton onClick={this.toggleDrawer(false)}>
                        <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List style={navStyles.drawer}>
                        {['Home', 'Demo'].map((text, index) => (
                        <ListItem button key={text} onClick={this.toggleDrawer(text, false)}>
                            <ListItemIcon>{text === "Home" ? <HomeIcon /> : <PlayIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                        ))}
                    </List>
                </Drawer>
            </AppBar>
        );
    }
}

export default Navigation;