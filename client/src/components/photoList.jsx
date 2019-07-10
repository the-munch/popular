import React from 'react'
import style from '../style.css'




const Photolist = (props) => {
    {console.log(props.photo.data)}
    return (
        <div>
            {props.photo.data.map(pic => <img src = {pic.image} key = {pic._id}></img>)}
            <div className = {style.test}> Test Me Please</div>
        </div>
    )
}




export default Photolist

