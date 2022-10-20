import React, { useRef, useEffect, useState } from 'react';
import './Header.css';

import { NavLink, useNavigate, Link } from 'react-router-dom'

import { motion } from 'framer-motion';

import { TbVinyl } from 'react-icons/tb';
import { BiShoppingBag } from 'react-icons/bi';
import { AiOutlineHeart, AiOutlineMenu } from 'react-icons/ai';
import userIcon from "../../assets/images/user-icon.png";

import { Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';

import useAuth from '../../custom-hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { toast } from 'react-toastify';

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
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  
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
    });
  };

  const logout = () => {
    signOut(auth).then(() => {
      toast.success('Logged out');
      navigate('/home');
    }).catch(err => {
      toast.error(err.message)
    })
  }

  useEffect(() => {
    stickyHeaderFunction()

    return () => window.removeEventListener('scroll', stickyHeaderFunction)
  });

  const menuToggle = () => menuRef.current.classList.toggle('active__menu');

  const navigateToCart = () => {
    navigate('/cart');
  };


  const toggleActions = () => {
    const show = document.getElementById("actions");
    if (show.style.display === "block") {
      show.style.display = "none";
    } else {
      show.style.display = "block";
    }
  };


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
                <span className="cart__icon" onClick={navigateToCart}>
                  <BiShoppingBag />
                  <span className="badge">{totalQuantity}</span>
                </span>
                
                <div className="profile">
                  <motion.img 
                    whileTap={{ scale: 1.2 }} 
                    src={ currentUser ? currentUser.photoURL : userIcon } 
                    onClick={toggleActions}
                  />

                  <div 
                    className="profile__actions"
                    id="actions"
                    onClick={toggleActions}
                  >
                    {currentUser ? (
                        <span onClick={logout}>Logout</span>
                      ) : (
                        <div className='d-flex align-items-center justify-content-center flex-column'>
                          <Link to='/signup'>Signup</Link>
                          <Link to='/login'>Login</Link>
                        </div>
                      )}
                  </div>
                </div>
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