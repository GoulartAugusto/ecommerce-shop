import React from 'react';
import '../../styles/product-card.css';
import { AiOutlinePlus } from 'react-icons/ai';
import {motion} from 'framer-motion';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({item}) => {
  return (
    <Col lg='3' md='4' className='mb-4'>
        <div className='product__item'>
            <div className="product__img">
                <motion.img whileHover={{scale: 0.9}} src={item.imgUrl} alt="" />
            </div>
            <div className='p-2 product__info'>
              <h4 className="product__name">
                <Link to={`/shop/${item.id}`}>{item.productName}</Link>
              </h4>
              <span>{item.catergory}</span>
            </div>
            <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
                <span className='price'>${item.price}</span>
                <motion.span whileTap={{scale:1.2}}><AiOutlinePlus /></motion.span>
            </div>
        </div>
    </Col>
  )
}

export default ProductCard