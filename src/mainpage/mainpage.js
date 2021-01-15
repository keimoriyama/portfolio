import React from 'react'
import "./mainpage.css"

class mainpage extends React.Component{
    render(){
        return(
            <div className='title'>
                <h1 className='title_content'>Welcome</h1>
                <h1 className='title_content'>To</h1>
                <h1 className='title_content'>My Portfolio!</h1>
            </div>
        )
    }
}

export default mainpage