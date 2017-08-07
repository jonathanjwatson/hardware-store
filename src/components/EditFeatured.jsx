import React, {Component} from 'react';

class EditFeatured extends Component {
    
    render() {
        return (
            <div>
             <span><button onClick={this.props.toggleEditSaleItem}>{ this.props.editSaleItem ? `Hide` : `Edit Sale Item`}</button></span>
             { this.props.editSaleItem ? <div>
                 <input 
 		        onChange={this.props.handleItemCurrentlyOnSaleChange}
 		        value={this.props.itemCurrentlyOnSale} 
 		        type="text"
                />
                 </div> : null }
            </div>

        )
    }
}
export default EditFeatured;