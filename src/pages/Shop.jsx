import React, { useState } from 'react';
import '../styles/Shop.css';
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import { AiOutlineSearch } from 'react-icons/ai';

import products from '../assets/data/products';
import ProductsList from '../components/UI/ProductsList'

const Shop = () => {

  const [productsData, setProductsData] = useState(products);

  const handleFilter = e => {
    const filterValue = e.target.value
    if (filterValue === 'Vinyls') {
      const filteredProducts = products.filter((item) =>
      item.category === 'Vinyls'
      );

      setProductsData(filteredProducts)
    }

    if (filterValue === 'Shirts') {
      const filteredProducts = products.filter((item) =>
      item.category === 'Shirts'
      );

      setProductsData(filteredProducts)
    }

    if (filterValue === 'Posters') {
      const filteredProducts = products.filter((item) =>
      item.category === 'Posters'
      );

      setProductsData(filteredProducts)
    }

    if (filterValue === 'Victrolas') {
      const filteredProducts = products.filter((item) =>
      item.category === 'Victrolas'
      );

      setProductsData(filteredProducts)
    }

    if (filterValue === 'Speakers') {
      const filteredProducts = products.filter((item) =>
      item.category === 'Speakers'
      );

      setProductsData(filteredProducts)
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value

    const searchedProducts = products.filter((item) => item.productName.
    toLowerCase().includes(searchTerm.toLowerCase()))

    setProductsData(searchedProducts); 
  }

  return (
    <Helmet title='Shop'>
      <CommonSection title='Products' />

      <section>
        <Container>
          <Row>
            <Col lg='3' md='6'>
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter by Category</option>
                  <option value="Vinyls">Vinyls</option>
                  <option value="Shirts">Shirts</option>
                  <option value="Posters">Posters</option>
                  <option value="Victrolas">Victrolas</option>
                  <option value="Speakers">Speakers</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='6' className='text-end'>
            <div className="filter__widget">
                <select>
                  <option>Sort By</option>
                  <option value="Ascending">Ascending</option>
                  <option value="Descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='12'>
              <div className="search__box">
                <input 
                  type="text" 
                  placeholder='Search...' 
                  onChange={handleSearch} 
                />
                <span>
                  <AiOutlineSearch />
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className='pt-0'>
        <Container>
          <Row>
            {productsData.length === 0 ? (
            <h1 className='text-center fs-4'>No products are found!</h1>
            ) : ( <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop