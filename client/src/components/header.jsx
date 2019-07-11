import React from 'react';
import style from '../style.css';


const PopHeader = props => {
    return  (
        <div className = {style.container}> 
            <div>popular dish </div>
            <div> view menu</div>
            <div>left arrow method</div> 
            <div>right arrow method</div>
        </div>
    );
}



export default PopHeader