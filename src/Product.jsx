import React from 'react';
import { Fragment } from 'react';
class  Product extends React.Component {
    constructor(props) {
        super(props);
    }
  
    formatName(object){
        return object.name + " " + object.price;
    }

    render() {
        var table = {name:"Water", price:2000};
        var tableContent = <Fragment><h1>{this.formatName(table)}</h1></Fragment>
        return tableContent;
    }
}

export default Product;
