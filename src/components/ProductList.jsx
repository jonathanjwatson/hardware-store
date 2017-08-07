 import React, {Component} from 'react';
 
 import Product from './Product';
 
 class ProductList extends Component {
    _addNewProduct = (event) => {
        event.preventDefault();
        this.props._addNewProductToProductList(this.state.newProduct);
    };

   render() {
     const productList = this.props.productList;
 
     console.log(productList);
 
     const productComponents = productList.map((product, index) => {
       return <Product
            deleteProductFromProductList={this.props.deleteProductFromProductList}
            shopView={this.props.shopView}
           productName={product.productName}
           description={product.description}
           price={product.price}
           id={index}
           key={index}/>;
     });
 
     return (
         <div>
           { productComponents }
         </div>
     );
 
   }
 }
 
 export default ProductList;