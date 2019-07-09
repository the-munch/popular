import React from 'react'
import PhotoList from './photoList.jsx';


class Popular extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
render() {
    // {console.log(this.props.data[0].image)}
    return(
        <div>
        <h1>Helloo!!!...  We have life!</h1>  
        <PhotoList data = {this.props}/>
        
         </div>
        )
    {console.log(Photolist)}
    }
}
// {console.log('hello')}
//* <div><img src={this.props.data[0].image}></img></div> */

export default Popular

