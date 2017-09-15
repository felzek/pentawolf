import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MenuBar from './MenuBar.js';
import Banner from "./Banner.js";
import registerServiceWorker from './registerServiceWorker';
import LoginButtonWithPopup from './LoginButtonWithPopup.js';

ReactDOM.render(<MenuBar />, document.getElementById('menu-bar'));
ReactDOM.render(<Banner />, document.getElementById('banner'));
ReactDOM.render(<LoginButtonWithPopup />, document.getElementById('button'));

registerServiceWorker();
