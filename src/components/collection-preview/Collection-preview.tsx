import React, { FC } from 'react'
import CollectionItem from '../collectionItem/CollectionItem'
import './collection-preview.scss'
interface prorps {
    title:string
   items: { id: number; name: string; imageUrl: string; price: number; }[]; 
  }


const CollectionPreview:FC<prorps> = ({title,items}) => {
  return (
    <div className='collection-preview'>
        <h1 className='title'>{title}</h1>
        <div className='preview'>
           {
               items.filter((item , index)=> index < 4).map(({id, ...otherProps})=>{
             return (
               <CollectionItem   key={id} {...otherProps}/>
             )
               })
           }
        </div>
      
    </div>
  )
}

export default CollectionPreview