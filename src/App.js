import './App.css';

import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import NaviBar from './navibar'
import mainpage from './mainpage'
import profile from './profile'
import product from './product'

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NaviBar /><hr />
          <Route exact path = "/" component = {mainpage}></Route>
          <Route path = "/profile" component = {profile}></Route>
          <Route path = "/product" component = {product}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
