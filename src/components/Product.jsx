import React, {Component} from 'react'

class Product extends Component {
    _deleteProduct = (event) => {
        console.log(`Delete product`)
        console.log(`Event Data:`)
        console.log(event);
        this.props.deleteProductFromProductList(this.props.id);
    };
    _addProductToCart = (event) => {
        console.log(`Add product to cart`);
        this.props.addProductToCartList(this.props.id);
    }

    render() {
        const key = this.props.key
        return(
            <div key={this.props.key}>

                <h4>Product Name: {this.props.productName}</h4>
                <p>Description: {this.props.description}</p>
                <p>Price: ${this.props.price}</p>
                { this.props.shopView ? <button conClick={this._addProductToCart}>Add to Cart</button> : <button onClick={this._deleteProduct}>Delete</button>}
                
            </div>
        ) 
    }
}
export default Product;