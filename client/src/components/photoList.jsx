import React from 'react';
import style from '../style.css'


const Photolist = (props) => {
    // Note:  A better way to do this is have 10 different documents from Mongo created with the same resturant ID and map them out
    {console.log(props.data)}
    return (
        <div className = {style.containerForPopularDishImage} id = 'containerForContent'> 
            {props.data.map(pic =>
          <div className = {style.test}>
            <div className = {style.containerForImagesAndContent}>
                <div className = {style.popularDishDivContainer}>
                    <img className ={style.popularDishImages} src= {pic.image}  ></img>
                    <span className = {style.popularDishPrice}>${pic.price}.00</span>
                </div>
                <div className = {style.popularDishName}>
                    {pic.name}
                </div>
                <div className = {style.containerForPhotoCountAndReview}>
                    <small className = {style.popularDishPhotoCount }>{pic.phoCount} Photos</small>
                    <small className = {style.popularDishImportantDot}>•</small>
                    <small className = {style.popularDishReviewCount}>{pic.revCount} Reviews</small>
                </div>
            </div>
          </div>
            )}
        </div>
    )
}

// {props.data.map(pic => <img className ={style.foodImages} src = {pic.image} key = {pic._id}></img>)}
       

export default Photolist

