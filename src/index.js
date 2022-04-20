import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import {
  BrowserRouter,

} from "react-router-dom";
import Nav from './components/nav';
import Routess from './Routes';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
      <header>
        <Nav/>
      </header>
     <Routess/>
    
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);


