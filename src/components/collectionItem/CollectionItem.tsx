import React, { FC } from 'react'
import './collection.scss'
interface props{
    name:string
    imageUrl:string
    price:number
}

const CollectionItem:FC<props> = ({ name, imageUrl,price}) => {
  return (
    <div className='collection-item'>
        <div className='image'
          style={{
              backgroundImage:`url(${imageUrl})`
          }}
        />
        <div className='footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>

        </div>

    </div>
  )
}

export default CollectionItem