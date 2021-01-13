import React from 'react'
import profile_image from '../img/profile_image.png'
import "./profile.css"

const IcomComponent = () =>{
    return(
        <img src={profile_image} className='image'></img>
    )
}

class profile extends React.Component{
    render(){
        return(
            <div>
                <h1>This is profile page</h1>
                <div className='main_layout'>
                    <IcomComponent />
                    <div className='profile'>
                        <h2>Name: Kei Moriyama</h2>
                        <h2>School: NITTC</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default profile