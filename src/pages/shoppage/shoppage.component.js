import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import ShopData from '../../data/shop.json';

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ShopData.SHOP_DATA
    }
  }

  render() {
    return (
      <div className='shop-page'>
        {
          this.state.collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps}/>
          ))
        }
      </div>
    );
  }
} 

export default ShopPage;