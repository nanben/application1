import ReactDOM from 'react-dom';
import React from 'react';
import MyApp from './MyApp';
import * as serviceWorker from './serviceWorker';
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  
 <MyApp/>, document.getElementById('root')
);
serviceWorker.unregister();