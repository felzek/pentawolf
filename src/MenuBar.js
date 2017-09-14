import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

injectTapEventPlugin();

const poo = {
  'background-image' : "https://unsplash.it/40/40"
};

const img = <img style={{marginTop: 10}}src="https://unsplash.it/40/40"/>;

class MenuBar extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };


  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
      <Toolbar>
        <ToolbarGroup>
          <img src="https://unsplash.it/40/40"/>
          <MenuItem primaryText="Home" />
          <MenuItem primaryText="About Us" />
          <MenuItem primaryText="Become a Distributor Today" />
          <MenuItem primaryText="Sleepwear" />
          <MenuItem primaryText="Pajamas" />
          <MenuItem primaryText="T-Shirts" />
          <MenuItem primaryText="Contact Us" />

          <ToolbarSeparator />
          <RaisedButton label="Login" primary={true} />

        </ToolbarGroup>
      </Toolbar>

      </div>
      </MuiThemeProvider>
    );
  }
}

export default MenuBar;
