import React, { useRef, useEffect } from 'react';
import './Header.css';

import { NavLink } from 'react-router-dom'

import { motion } from 'framer-motion';

import { TbVinyl } from 'react-icons/tb';
import { BiShoppingBag } from 'react-icons/bi';
import { AiOutlineHeart, AiOutlineMenu } from 'react-icons/ai';
import userIcon from "../../assets/images/user-icon.png";

import { Container, Row } from 'reactstrap';

const nav__links = [
  {
    path:'home',
    display: 'Home'
  },
  {
    path:'shop',
    display: 'Shop'
  },
  {
    path:'cart',
    display: 'Cart'
  }
]

const Header = () => {
  
  const headerRef = useRef(null);

  const menuRef = useRef(null);
  
  const stickyHeaderFunction = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 || 
        document.documentElement.scrollTop > 80
        ) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    stickyHeaderFunction()

    return () => window.removeEventListener('scroll', stickyHeaderFunction)
  });

  const menuToggle = () => menuRef.current.classList.toggle('active__menu')

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className='nav__wrapper'>
            <div className='logo'>
              <TbVinyl className='logo__img' />
              <div>
                <h1>Smartmart</h1>
              </div>
            </div>

              <div className="navigation" ref={menuRef} onClick={menuToggle}>
                <ul className="menu">
                  {nav__links.map((item, index) => (
                      <li className="nav__item" key={index}>
                        <NavLink 
                          to={item.path} 
                          className={(navClass) => 
                          navClass.isActive ? 'nav__active' : ''
                          }>
                            {item.display}
                          </NavLink>
                      </li>
                    ))
                  }
                </ul>
              </div>

              <div className="nav__icons">
                <span className="fav__icon">
                  <AiOutlineHeart />
                  <span className="badge">1</span>
                </span>
                <span className="cart__icon">
                  <BiShoppingBag />
                  <span className="badge">1</span>
                </span>
                <span>
                  <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="user" className="user-image" />
                </span>
                <div className="mobile__menu">
                  <span onClick={menuToggle}><AiOutlineMenu /></span>
                </div>
              </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header;