



//https://preview.themeforest.net/item/poco-fast-food-restaurant-wordpress-theme/full_screen_preview/28465454?_ga=2.248056135.1183159891.1653827446-1710271070.1650856206

import { menuHome, pizzaDataHome, sushiDataHome, salatsDataHome, burgerDataHome, dersertDataHome, toprecipe } from "../../arrayObj/data.js"
import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from 'react'
import SpItem from "../../component/SpItem"
import SpLeftItem from "../../component/SpLeftItem"
import './Home.scss'
import Header from "../Header/Header.js"
import Footer from "../Footer/Footer.js"


function HeadHome() {
    return (
        <div id="head">
            <div className="content">
                <div className="left">
                    <div>
                        <h1>UNLIMITED <br /> MEDIUM
                            <span> PIZZAS</span>
                        </h1>
                        <h2>Medium 2-topping* pizza</h2>
                        <p>*Additional charge for premium toppings. Minimum of 2 required.</p>
                        <div className="left-foot">
                            <div className="order">
                                <button>ORDER NOW</button>
                            </div>
                            <div className="price">
                                <h1>$12.99</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/h1_pizza.png" />
                </div>
            </div>
        </div>
    );
}

function ItemMenuHome({ sp }) {

    return (
        <div key={`${sp.masp}`}>
            <div className="image">
                <img className="shape_1" src={require("../../image/shape_home_menu.png")} />
                <img src={sp.img} />
            </div>
            <div className="name">{sp.name}</div>
        </div>
    )
}
function MenuHome() {
    return (
        <div id="menu">
            <div className="menu">
                <Link to="#">MENU</Link>
            </div>
            <div className="sp">
                {
                    menuHome.map((sp) => {
                        return <ItemMenuHome
                            sp={sp}
                        />
                    })
                }
            </div>
        </div>
    )
}

function SectionHome() {

    return (
        <div id="section">
            <div className="section_1">
                <h1>Any day <br />offers</h1>
                <h2>NEW PHENOMENON <br /> BURGER TASTE</h2>
                <h3 className="colorGreen">$12.90</h3>
                <div className="img_1">
                    <img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/h1_banner1-1.png" />
                </div>
                <div className="img_2">
                    <img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/h1_banner1-2.png" />
                </div>
            </div>
            <div className="section_2">
                <h1>Any day <br />offers</h1>
                <h2>NEW PHENOMENON <br /> BURGER TASTE</h2>
                <h3 className="colorYellow">$12.90</h3>
                <div className="img_1">
                    <img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/h1_banner2-2.png" />
                </div>
                <div className="img_2">
                    <img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/h1_banner2-1.png" />
                </div>
            </div>
            <div className="section_3">
                <h1>Any day <br />offers</h1>
                <div className="link">
                    <Link to="/contact">CONTACT US</Link>
                </div>
                <div className="img_1">
                    <img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/h1_banner3.png" />
                </div>
                <div className="img_2">
                    <img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/h1_banner2-1.png" />
                </div>
            </div>
        </div>
    );
}

function Pizza() {
    return (
        <ul>
            {pizzaDataHome.map((item) => {
                return (
                    <SpItem
                        item={item}
                    />
                )
            })}
        </ul>
    );
}
function Sushi() {
    return (
        <ul>
            {sushiDataHome.map((item) => {
                return (
                    <SpItem
                        item={item}
                    />
                )
            })}
        </ul>
    );
}
function Salats() {
    return (
        <ul>
            {salatsDataHome.map((item) => {
                return (
                    <SpItem
                        item={item}
                    />
                )
            })}
        </ul>
    );
}
function Burger() {
    return (
        <ul>
            {burgerDataHome.map((item) => {
                return (
                    <SpItem
                        item={item}
                    />
                )
            })}
        </ul>
    );
}
function Dersert() {
    return (
        <ul>
            {dersertDataHome.map((item) => {
                return (
                    <SpItem
                        item={item}
                    />
                )
            })}
        </ul>
    );
}

function Popular() {
    function handleSetType(e) {
        const element = document.querySelector(`#home #popular .tabs .${type}`)
        if (element) {
            element.style.backgroundColor = "#fff";
        }
        setType(e.target.className)
    }
    const [type, setType] = useState('PIZZA');

    const listStates = useRef({
        PIZZA: false,
        SUSHI: false,
        SALATS: false,
        BURGER: false,
        DERSERT: false
    })

    listStates.current.PIZZA = false
    listStates.current.SUSHI = false
    listStates.current.SALATS = false
    listStates.current.BURGER = false
    listStates.current.DERSERT = false
    listStates.current[type] = true


    useEffect(() => {
        const element = document.querySelector(`#home #popular .tabs .${type}`)
        if (element) {
            element.style.backgroundColor = "var(--main-color)";
        }
    }, [type])

    return (
        <div id="popular">
            <div className="title">Popular Disher</div>
            <div className="tabs">
                <div className="PIZZA" onClick={handleSetType}>PIZZA</div>
                <div className="SUSHI" onClick={handleSetType}>SUSHI</div>
                <div className="SALATS" onClick={handleSetType}>SALATS</div>
                <div className="BURGER" onClick={handleSetType}>BURGER</div>
                <div className="DERSERT" onClick={handleSetType}>DERSERT</div>
            </div>
            <div className="container">
                {listStates.current["PIZZA"] && <Pizza />}
                {listStates.current["SUSHI"] && <Sushi />}
                {listStates.current["SALATS"] && <Salats />}
                {listStates.current["BURGER"] && <Burger />}
                {listStates.current["DERSERT"] && <Dersert />}
            </div>
            <div className="all-product">
                <Link to="/shop">ALL PRODUCTS</Link>
            </div>
        </div>
    );
}

function Banner() {
    return (
        <div key={"banner"} id={"banner"}>
            <div className="bg_1"></div>
            <div className="bg_2"></div>
            <div className="content">
                <div className="left">
                    <div className="bg_3">
                        <h1>get up to</h1>
                        <h2>50%</h2>
                        <h3>OFF</h3>
                    </div>
                </div>
                <div className="right">
                    <div>
                        <h1>Hot Fresh</h1>
                        <h2>HOTDOG</h2>
                        <div className="banner-link">
                            <Link to="/shop">ORDER NOW</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function TopRecipe() {
    return (
        <div id="toprecipe">
            <div className="left">
                <div className="head">
                    <h1 className="title">Top recipes</h1>
                    <div className="see_all">
                        <Link to="/shop">
                            <p>See all</p>
                            <i className="fa-solid fa-angle-right"></i>
                        </Link>
                    </div>
                </div>
                <ul>
                    {toprecipe.map((item) => {
                        return <SpLeftItem item={item} />
                    })}
                </ul>
            </div>
            <div className="right">
                <h1>Super Delicious</h1>
                <h2>CHICKEN</h2>
                <h3>CALL US NOW:</h3>
                <h4>1-800-555-333</h4>
            </div>
        </div>
    )
}

function Home() {
    // useEffect(()=>{
    //     window.scrollTo(0,0)
    // }, [])
    return (
        <>
            <Header />
            <div id="home">
                <HeadHome />
                <MenuHome />
                <SectionHome />
                <Popular />
                <Banner />
                <TopRecipe />
            </div>
            <Footer />
        </>
    )
}
// https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/h1_shape-8.png
export default Home;