import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import '../styles/Home.css';
import Helmet from '../components/Helmet/Helmet';

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';

import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';

import Clock from '../components/UI/Clock';

import counterImg from '../assets/images/counter-image.png';

import useGetData from '../custom-hooks/useGetData';

const Home = () => {

  const {data: products, loading} = useGetData('products')

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [soundProducts, setSoundProducts] = useState([]);
  const [populartProducts, setPopularProducts] = useState([]);


  const year = new Date().getFullYear();

  useEffect(()=> {
    const filteredTrendingsProducts = products.filter(
      (item) => item.category === 'Vinyls'
      );

      const filteredBestSalesProducts = products.filter(
        (item) => item.category === 'Shirts'
        );

      const filteredNewProducts = products.filter(
        (item) => item.category === 'Posters'
        );

      const filteredSoundProducts = products.filter(
        (item) => item.category === 'Speakers'
        );

      const filteredPopularProducts = products.filter(
        (item) => item.category === 'Victrolas'
        );

      setTrendingProducts(filteredTrendingsProducts);
      setBestSalesProducts(filteredBestSalesProducts);
      setNewProducts(filteredNewProducts);
      setSoundProducts(filteredSoundProducts);
      setPopularProducts(filteredPopularProducts);
  }, [products]);

  return (
    <Helmet title={'Home'}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero hero__content">
                <p className="hero__subtitle">Trending Product in {year}</p>
                <h2>Choose what You Like &amp; Enjoy</h2>
                <p>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Expedita quo sequi
                    inventore consequuntur harum bennefita.
                </p>
                <motion.button whileTap={{ scale: 1.1 }} className='buy__btn'><Link to='/shop'>SHOP NOW</Link></motion.button>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="tranding__products">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title mb-5'>Trending Products</h2>
            </Col>
            {
              loading ? <h5 className='fw-bold'>Loading...</h5> : 
              <ProductsList data={trendingProducts} />
            }
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
        <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title mb-5'>Best Sales</h2>
            </Col>
            {
              loading ? <h5 className='fw-bold'>Loading...</h5> : 
              <ProductsList data={bestSalesProducts} />
            }
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg='6' md='6' className='count__down-col'>
              <div className="clock__top-content">
                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                <h3 className='text-white fs-5 mb-3'>Simple Victrola</h3>
              </div>
              <Clock />
              <motion.button whileTap={{scale: 1.1}} className='buy__btn' style={{fontWeight: 600}}><Link to="/shop">Visit Store</Link></motion.button>
            </Col>

            <Col lg='6' md='6' className='text-end counter__img'>
              <img src={counterImg} alt='' />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg='12' className='text-center md-5'>
              <h2 className='section__title mb-5'>New Arrivals</h2>
            </Col>
            {
              loading ? <h5 className='fw-bold'>Loading...</h5> : 
              <ProductsList data={newProducts} />
            }
            {
              loading ? <h5 className='fw-bold'>Loading...</h5> : 
              <ProductsList data={soundProducts} />
            }
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg='12' className='text-center md-5'>
              <h2 className='section__title mb-5'>Popular in Category</h2>
            </Col>
            {
              loading ? <h5 className='fw-bold'>Loading...</h5> : 
              <ProductsList data={populartProducts} />
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home