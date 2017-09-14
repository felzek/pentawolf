import React from 'react';
import ReactDOM from 'react-dom';
import MenuBar from './MenuBar.js';

it('renders without crashing', () => {
  //const div = document.createElement('div');
  //ReactDOM.render(<App />, div);
  ReactDOM.render(<MenuBar />, document.getElementById('menu-bar'));
  //ReactDOM.render(<Banner />, document.getElementById('banner'));
});
