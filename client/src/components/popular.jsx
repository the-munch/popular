import React from 'react'
import PhotoList from './photoList.jsx';
import PopHeader from './header.jsx';


class Popular extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
render() {
    // {console.log(this.props.data[0].image)}
    return(
        <div>  
        <PopHeader/>
        <PhotoList photo = {this.props}/> 
         </div>
        )
    {console.log(Photolist)}
    }
}
// {console.log('hello')}
//* <div><img src={this.props.data[0].image}></img></div> */
    //    <span><img src={this.props.data[3].image}></img></span>
    //     <span><img src={this.props.data[4].image}></img></span>
    //     <span><img src={this.props.data[5].image}></img></span>
    //     <span><img src={this.props.data[6].image}></img></span>
    //     <span><img src={this.props.data[7].image}></img></span>
    //     <span><img src={this.props.data[8].image}></img></span>
    //     <span><img src={this.props.data[9].image}></img></span>
    //     <span><img src={this.props.data[10].image}></img></span>
    //     <span><img src={this.props.data[11].image}></img></span>
    //     <span><img src={this.props.data[12].image}></img></span>
    //     <span><img src={this.props.data[13].image}></img></span>
export default Popular

