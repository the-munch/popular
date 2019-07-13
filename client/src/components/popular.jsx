import React from 'react'
import $ from "jquery";
import PhotoList from './photoList.jsx';
import PopHeader from './header.jsx';
import style from '../style.css';


class Popular extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }

        this.scrollLeft = this.scrollLeft.bind(this)
        this.scrollRight = this.scrollRight.bind(this)
        // this.testcall = this.testcall.bind(this)
    }

componentDidMount() {
    $.ajax({
    method: 'GET',
    url: '/munch-popular',
    success: (data) => {
        // console.log(data)
        this.setState(() => {
            return {list: data};
          });
    }
 });
}

// (state) => {
//     return {quantity: state.quantity + 1};
//   });

// var state = Object.assign({}, this.state);
// this.state = data;
// this.setState(state);
scrollLeft() {
    document.getElementById('containerForContent').scrollLeft -= 500;
}

scrollRight() {
    document.getElementById('containerForContent').scrollLeft += 500;
}


render() {
    return(
        <div className = {style.moduleContainer}>  
        <div><PopHeader
        scrollLeft = {this.scrollLeft} 
        scrollRight = {this.scrollRight}
        /></div>
        <div><PhotoList data = {this.state.list}/> </div>
         </div>
        )
    }
}

export default Popular

