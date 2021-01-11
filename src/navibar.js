import React from 'react'
import { Link } from 'react-router-dom'

class NaviBar extends React.Component{
    render(){
        return(
            <div>
                <Link to="/">Home</Link>
                <Link to="/product">product</Link>
                <Link to="/profile">profile</Link>
                <Link to="/contact">contact</Link>
            </div>
        )
    }
}

export default NaviBar