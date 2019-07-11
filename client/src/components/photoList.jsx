import React from 'react';
import style from '../style.css'



const Photolist = (props) => {

    return (
        <div>
            {props.data.map(pic => <span><img src = {pic.image} key = {pic._id} ></img></span>)}
            <h2 className = {style.work}> Test Me Please</h2>
        </div>
    )
}

// {console.log(props.photo.data)}
//  <h2 className = {style.work}> Test Me Please</h2>

export default Photolist

