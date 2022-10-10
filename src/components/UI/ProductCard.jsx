import React from 'react';
import '../../styles/product-card.css';
import { AiOutlinePlus } from 'react-icons/ai';
import {motion} from 'framer-motion';
import productImg from '../../assets/images/vinil-03.jpg';
import { Col } from 'reactstrap';

const ProductCard = () => {
  return (
    <Col lg='3' md='4'>
        <div className='product__item'>
            <div className="product__img">
                <img src={productImg} alt="" />
            </div>
            <h4 className="product__name">Sex Pistols - The Original Recordings Vinyl</h4>
            <span>Vinyl</span>
            <div className="product__card-bottom">
                <span className='price'>$99</span>
                <span><AiOutlinePlus /></span>
            </div>
        </div>
    </Col>
  )
}

export default ProductCard