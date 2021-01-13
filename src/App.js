import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import NaviBar from './navibar/navibar'
import mainpage from './mainpage/mainpage'
import profile from './profile/profile'
import product from './product/product'
import contact from './contact/contact'

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
