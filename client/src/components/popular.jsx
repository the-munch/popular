import React from 'react'
import PhotoList from './photoList.jsx';
import PopHeader from './header.jsx';
import style from '../style.css'


class Popular extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.scrollLeft = this.scrollLeft.bind(this)
        this.scrollRight = this.scrollRight.bind(this)
    }

scrollLeft() {
    document.getElementById('containerForContent').scrollLeft -= 500;
}

scrollRight() {
    document.getElementById('containerForContent').scrollLeft += 500;
}


render() {
    // {console.log(this.scrollLeft)}
    return(
        <div className = {style.moduleContainer}>  
        <div><PopHeader
        scrollLeft = {this.scrollLeft} 
        scrollRight = {this.scrollRight}
        /></div>
        <div><PhotoList data = {this.props.data}/> </div>
         </div>
        )
    {console.log(Photolist)}
    }
}

export default Popular

