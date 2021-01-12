import React from 'react'
import { Link } from 'react-router-dom'
import './navibar.css'

class NaviBar extends React.Component{
    render(){
        return(
            <div>
                <Link to="/" className="bar">Home</Link>
                <Link to="/product" className='bar'>product</Link>
                <Link to="/profile" className='bar'>profile</Link>
                <Link to="/contact" className='bar'>contact</Link>
            </div>
        )
    }
}

export default NaviBar