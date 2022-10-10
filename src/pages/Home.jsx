import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../assets/data/products';

import '../styles/Home.css';
import Helmet from '../components/Helmet/Helmet';

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png'

import Services from '../services/Services';
import ProducsList from '../components/UI/ProducsList';

const Home = () => {

  const [data, setData] = useState(products);
  const year = new Date().getFullYear();

  useEffect(()=> {
    const filteredProducts = products.filter(
      (item) => item.catergory === 'Vinyls'
      );

      setData(filteredProducts)
  }, []);

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
            <ProducsList data={data} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home