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
<<<<<<< HEAD
        <div>
        <h1>Helloo!!!...  We have life!</h1>  
        <PhotoList data = {this.props.data}/> 
=======
        <div className = {style.moduleContainer}>  
        <div><PopHeader/></div>
        <div><PhotoList data = {this.props.data}/> </div>
>>>>>>> master
         </div>
        )
    {console.log(Photolist)}
    }
}

export default Popular

// data = {this.props.data}