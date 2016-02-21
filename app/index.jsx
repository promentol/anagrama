import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
require('normalize.css');


ReactDOM.render(<Main/>, document.getElementById('app'));