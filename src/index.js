import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MenuBar from './MenuBar.js';
import Banner from "./Banner.js";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MenuBar />, document.getElementById('menu-bar'));
ReactDOM.render(<Banner />, document.getElementById('banner'));

registerServiceWorker();
