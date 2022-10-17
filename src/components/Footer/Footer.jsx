import React from 'react';
import './Footer.css';

import { BsTelephone, BsEnvelope } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
import { TbVinyl } from 'react-icons/tb';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4'>
            <div className='logo'>
              <TbVinyl className='logo__img' />
              <div>
                <h1>Smartmart</h1>
              </div>
            </div>
              <p className="footer__text ml-4 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quae ad! Sed, corrupti. Iste ipsam illo quibusdam, id placeat iusto?
              </p>
          </Col>
          <Col lg='3'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title text-white">Top Catergories</h4>
              <ListGroup className='footer__contact mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Speakers</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Victrolas</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Vinyls</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Shirts</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='2'>
            <div className="footer__quick-links">
                <h4 className="quick__links-title text-white">Useful Links</h4>
                <ListGroup className='footer__contact mb-3'>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='/shop'>Shop</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='/cart'>Cart</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='/login'>Login</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='#'>Privacy Policy</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
          </Col>
          <Col lg='3'>
            <div className="footer__quick-links">
                <h4 className="quick__links-title text-white">Contact</h4>
                <ListGroup className='footer__contact mb-3'>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                    <span><BiMap /></span>
                    <p>213 Izidoro Januario, Florianópolis, SC, Brazil</p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                    <span><BsTelephone /></span>
                    <p>+55 48 999 25 88 53</p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                    <span><BsEnvelope /></span>
                    <p>goulart.augusto@gmail.com</p>
                  </ListGroupItem>

                </ListGroup>
              </div>
          </Col>
          <Col lg='12'>
            <p className="footer__copyright">Copyright {year} developed by <a href='https://goulartportifolio.web.app/' target='__blank'>Augusto Goulart</a>. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer