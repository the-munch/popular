import React from 'react';
import style from '../style.css';


const PopHeader = props => {
    return  (
        <div className = {style.containerPopularDishes}> 
            <div> <h2 className = {style.popularDish} > popular dish </h2> </div>
            <div> <a className = {style.viewFullMenu} href="" >View Full Menu</a></div>
            <div>
                <span className = {style.spanForLeftArrow}><i class="fas fa-chevron-left"></i></span>
                </div> 
            <div>
                <span className = {style.spanForRightArrow}><i class="fas fa-chevron-right"></i></span>
                </div>
        </div>
    );
}



export default PopHeader