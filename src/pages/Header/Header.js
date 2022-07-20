
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import "@fortawesome/fontawesome-free/css/all.min.css"
// import "./Header.css"
import './Header.scss'

import { headerSetNav } from '../../redux/action/headerAction.js'

function Header() {

    const dispatch = useDispatch()
    const check = useSelector(state => {
        return state.header.isHeader;
    })

    function handleClick(str) {
        dispatch(headerSetNav(str))
    }

    useEffect(() => {
        switch (window.location.pathname) {
            case '/':
                dispatch(headerSetNav('home'))
                break;
            case '/about':
                dispatch(headerSetNav('about'))
                break;
            case '/shop':
                dispatch(headerSetNav('shop'))
                break;
            case '/contact':
                dispatch(headerSetNav('contact'))
                break;
        }
        const homeElement = document.querySelector(`header .home`)
        homeElement.style.color = "#000"
        const aboutElement = document.querySelector(`header .about`)
        aboutElement.style.color = "#000"
        const shopElement = document.querySelector(`header .shop`)
        shopElement.style.color = "#000"
        const contactElement = document.querySelector(`header .contact`)
        contactElement.style.color = "#000"
        if (check) {
            const stateEle = document.querySelector(`header .${check}`)
            stateEle.style.color = "var(--main-color)"
        }
    })
    return (
        <header>
            <div className="nav">
                <div className="nav-left">
                    <div className="logo-header">
                        <img src={require('../../image/logo2.jpg')} alt="" />
                    </div>
                    <div>
                        <Link onClick={() => { handleClick('home') }} className="home" to="/" >Home</Link>
                        <Link onClick={() => { handleClick('about') }} className="about" to="/about" >About</Link>
                        <Link onClick={() => { handleClick('shop') }} className="shop" to="/shop" >Shop</Link>
                        <Link onClick={() => { handleClick('contact') }} className="contact" to="/contact" >Contact</Link>
                    </div>
                </div>
                <div className="nav-right">
                    <div className="header-search">
                        <input type="text" placeholder="search...." />
                        <a href="#">
                            <i className="fas fa-search"></i>
                        </a>
                    </div>
                    <div className="header-sign">
                        <Link to="/login">
                            <i className="fas fa-user"></i>
                        </Link>
                    </div>
                    <div className="header-cart">
                        <Link to="/cartshop">
                            <i className="fas fa-shopping-cart"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;