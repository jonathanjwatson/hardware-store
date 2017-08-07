import React, { Component } from 'react';
import AdminView from './AdminView'
import ProductList from './ProductList'
import EditFeatured from './EditFeatured'

class HomePage extends Component {

    constructor() {
        super();
    
        this.state = {
            itemCurrentlyOnSale: 'A Hammer',
            editSaleItem: true,
            shopView: true,
            productList: [
                {
                productName: 'Hammer',
                description: 'Itsa hammer',
                price: 12.3,
                },
                {
                productName: 'Nail',
                description: 'Itsa nail',
                price: 0.12,
                }
            ],
            cartList: []
        };
    }
    _toggleEditSaleItem = () => {
        const editSaleItem = !this.state.editSaleItem;
        this.setState({editSaleItem});
    };
    _toggleShopView = () => {
        const shopView = !this.state.shopView;
        this.setState({shopView});
    }
    _handleItemCurrentlyOnSaleChange = (event) => {
 	    const itemCurrentlyOnSale = event.target.value;
 	    this.setState({itemCurrentlyOnSale});
       };

    _addNewProductToProductList = (newProduct) => {
        const productList = [...this.state.productList];
        productList.push(newProduct);
        this.setState({productList});
    };
    _deleteProductFromProductList = (productKey) => {
        console.log(`Product Key: `);
        console.log(productKey);
        const productList = [...this.state.productList];
        productList.splice(productKey, 1);
        this.setState({productList});
    };
    _addProductToCartList = (productKey) => {
        const cartList = [...this.state.cartList];
        cartList.push(productKey);
        this.setState({cartList});
    }


    render() {
        return (
            <div>
            <h1>My Hardware Store</h1>
           <div>
             <span>Currently On Sale: { this.state.itemCurrentlyOnSale }!</span>
             <br />
             {this.state.shopView ? 
                null : 
                <EditFeatured 
                    toggleEditSaleItem={this._toggleEditSaleItem} 
                    editSaleItem={this.state.editSaleItem} 
                    itemCurrentlyOnSale={this.state.itemCurrentlyOnSale} 
                    handleItemCurrentlyOnSaleChange={this._handleItemCurrentlyOnSaleChange}/>
            }


            <span><button onClick={this._toggleShopView}>{ this.state.shopView ? `Admin View` : `Shop View`}</button></span>
            {this.state.shopView ? 
                <ProductList productList={this.state.productList} shopView={this.state.shopView}/> :
                <AdminView shopView={this.state.shopView} productList={this.state.productList} 
                            addNewProductToProductList={this._addNewProductToProductList} 
                            deleteProductFromProductList={this._deleteProductFromProductList}/> 
                
            }
           </div>
           </div>
        )
    }


}

export default HomePage;






