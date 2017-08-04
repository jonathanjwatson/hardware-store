import React, {Component} from 'react'

class Product extends Component {
    render() {
        return(
            <div key={this.props.key}>
            
                <h4>Product Name: {this.props.productName}</h4>
                <p>Description: {this.props.description}</p>
                <p>Price: ${this.props.price}</p>
            </div>
        ) 
    }
}
export default Product;