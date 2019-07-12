import React from 'react'
import style from '../style.css';




const Photolist = (props) => {
    {console.log(props.photo.data)}
    return (
        <div>Hello</div>
    )
}

/* <div>
            {props.photo.data.map(pic => <img className ={style.foodImages} src = {pic.image} key = {pic._id}></img>)}
        </div> */
export default Photolist

