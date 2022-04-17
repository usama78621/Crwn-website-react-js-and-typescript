import React, { Component, } from 'react';
import SHOP_DATA from '../../pages/shop/ShopData'
import CollectionPreview from '../collection-preview/Collection-preview'
interface MyEditorProps {

}
interface MyEditStata{
    collections :{ id: number; title: string; routeName: string; items: { id: number; name: string; imageUrl: string; price: number; }[]; }[]
}

class ShopItem extends Component<MyEditorProps,MyEditStata> {
    constructor(props:MyEditorProps) {
      super(props)
    
      this.state = {
         collections:SHOP_DATA
      }
    }
    render() {
        const {collections} = this.state
        return (
            <div className='shop-pages'>
         {
             collections.map(({id, ...otherCollectionProps})=>{
                return <CollectionPreview key={id} {...otherCollectionProps} />
             })
         }
                
            </div>
        );
    }
}



export default ShopItem;