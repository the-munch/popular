import React from 'react';
import style from '../style.css'



const Photolist = (props) => {
<<<<<<< HEAD

    return (
        <div>
            {props.data.map(pic => <span><img src = {pic.image} key = {pic._id} ></img></span>)}
            <h2 className = {style.work}> Test Me Please</h2>
=======
    {console.log(props.data)}
    {console.log(props.data[0].image)}
    return (
        <div className = {style.containerForPopularDishImage}>
            {props.data.map(pic =>
          <div className = {style.test}>
            <div className = {style.containerForImagesAndContent}>
                <div className = {style.popularDishDivContainer}>
                    <img className ={style.popularDishImages} src= {pic.image} key= {pic._id} ></img>
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
>>>>>>> master
        </div>
    )
}

<<<<<<< HEAD
// {console.log(props.photo.data)}
//  <h2 className = {style.work}> Test Me Please</h2>
=======
// {props.data.map(pic => <img className ={style.foodImages} src = {pic.image} key = {pic._id}></img>)}
       
// image: "https://popularlist.s3-us-west-1.amazonaws.com/munch3.jpg"
// name: "ullam"
// phoCount: 2
// price: 7
// revCount: 3
// __v: 0
// _id: "5d24f4c6ee0020e1f0a649ff"
>>>>>>> master

export default Photolist

