import React from 'react';
import style from '../style.css';



const Photolist = (props) => {
    {console.log(props.photo.data)}
    return (
        <div>
            {props.photo.data.map(pic => <span><img src = {pic.image} key = {pic._id}></img></span>)}
            <h2 className = {style.work}> Test Me Please</h2>
        </div>
    )
}




export default Photolist

