import React, { Component } from "react";
import CreateDailog from '../excersices/dailog/create';

import { AppBar, Toolbar, Typography } from '@material-ui/core';
class Header extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" color="secondary" style={{flex:1}}>
            Header
        </Typography>
        <CreateDailog />
         
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;