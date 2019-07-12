import React from 'react'
import style from '../style.css';




const Photolist = (props) => {
    {console.log(props.data)}
    {console.log(props.data[0].image)}
    return (
        <div className = {style.containerForPopularDishImage}>
            {/* mapping function start */}
            <div className = {style.containerForImagesAndContent}>
                <div className = {style.popularDishDivContainer}>
                    <img className ={style.popularDishImages} src= {props.data[0].image} ></img>
                    <span className = {style.popularDishPrice}>${props.data[0].price}.00</span>
                </div>
                <div className = {style.popularDishName}>
                    {props.data[0].name}
                </div>
                <div className = {style.containerForPhotoCountAndReview}>
                    <small className = {style.popularDishPhotoCount }>{props.data[0].phoCount} Photos</small>
                    <small className = {style.popularDishImportantDot}>•</small>
                    <small className = {style.popularDishReviewCount}>{props.data[0].revCount} Reviews</small>
                </div>
            </div>
            {/* mapping function end */}
        </div>
    )
}

// {props.data.map(pic => <img className ={style.foodImages} src = {pic.image} key = {pic._id}></img>)}
       
export default Photolist

