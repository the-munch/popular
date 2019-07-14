import React from 'react';
import style from '../style.css';


const PopHeader = props => {
    // console.log(props.scroll)
    return  (
        <div className = {style.containerPopularDishes}> 
            <div> <h2 className = {style.popularDish} > popular dish </h2> </div>
            <div> <a className = {style.viewFullMenu} href="" >View Full Menu</a></div>
            <div>
                <button className = {style.spanForLeftArrow} onClick = {props.scrollLeft} type="button"><i className="fas fa-chevron-left"></i></button>
                </div> 
            <div>
                <button className = {style.spanForRightArrow} onClick = {props.scrollRight}><i className="fas fa-chevron-right"></i></button>
                </div>
        </div>
    );
}



export default PopHeader