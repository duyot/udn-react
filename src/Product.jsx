import React from 'react';
import { Fragment } from 'react';
class  Product extends React.Component {

    constructor(props){
        super(props);
        this.state = {price: this.props.price};
    }
  
    formatName(object){
        return object.name + " " + object.price;
    }

    changePrice(amount){
        this.setState({price: this.state.price + amount});
    }

    render() {
     
        return <Fragment><h1>{this.formatName(this.props)}</h1>
        <h2>{this.state.price}</h2>
        <h2><button onClick={() => this.changePrice(3)}>Rate</button></h2>
        </Fragment>
    }
}

export default Product;
