import React from 'react'
import PhotoList from './photoList.jsx';
import PopHeader from './header.jsx';
import style from '../style.css'


class Popular extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
render() {
    // {console.log(this.props.data[0].image)}
    return(
        <div className = {style.moduleContainer}>  
        <div><PopHeader/></div>
        <div><PhotoList data = {this.props.data}/> </div>
         </div>
        )
    {console.log(Photolist)}
    }
}

export default Popular

// data = {this.props.data}