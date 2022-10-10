import React from 'react';
import ProductCard from './ProductCard';

const ProducsList = ({data}) => {
  return (
    <>
    {
      data.map(item => (
        <ProductCard item={item} />
      ))
    }
    </>
  )
}

export default ProducsList