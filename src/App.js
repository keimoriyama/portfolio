import './App.css';

import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import NaviBar from './navibar'
import mainpage from './mainpage'
import profile from './profile'
import product from './product'
import contact from './contact'

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NaviBar />
          <Route exact path = "/" component = {mainpage}></Route>
          <Route path = "/profile" component = {profile}></Route>
          <Route path = "/product" component = {product}></Route>
          <Route path = "/contact" component = {contact}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
