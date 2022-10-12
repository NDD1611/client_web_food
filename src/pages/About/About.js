

import { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom"

// import './about.css'
import './About.scss'
import Header from "../Header/Header.js"
import Footer from "../Footer/Footer.js"


function About() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    let phia = useRef('r')
    const [slide, setSlide] = useState(1)

    function hideContentRight(sl) {
        const content = document.querySelector(`#about .slide_show .content-${sl}`)
        const btn = document.querySelector(`#about .slide_show .btn-${slide}`)
        content.style.animation = 'rmRight_Left linear 0.2s'
        btn.style.opacity = '0.5'
        setTimeout(() => {
            content.style.display = 'none'
        }, 200)
    }
    function hideContentLeft(sl) {
        const content = document.querySelector(`#about .slide_show .content-${sl}`)
        const btn = document.querySelector(`#about .slide_show .btn-${slide}`)
        content.style.animation = 'rmLeft_Right linear 0.2s'
        btn.style.opacity = '0.5'
        setTimeout(() => {
            content.style.display = 'none'
        }, 200)
    }

    function handleRight(e) {
        phia.current = 'r'
        hideContentRight(slide)
        if (slide == 4) {
            setSlide(1);
            return;
        }
        setSlide(pre => pre + 1)
    }

    function handleLeft() {
        phia.current = 'l'
        hideContentLeft(slide);
        if (slide == 1) {
            setSlide(4);
            return;
        }
        setSlide(pre => pre - 1)
    }

    function handleBtn(num) {
        if (num > slide) {
            console.log('Right-left')
            phia.current = 'r'
            hideContentRight(slide)
            setSlide(num)
        }
        if (num < slide) {
            console.log("Left-Right")
            phia.current = 'l'
            hideContentLeft(slide);
            setSlide(num)
        }
    }

    useEffect(() => {
        const content = document.querySelector(`#about .slide_show .content-${slide}`)
        content.style.display = 'flex'
        if (phia.current == 'r') {
            content.style.animation = 'addRight_Left linear 0.2s'
        }
        if (phia.current == 'l') {
            content.style.animation = 'addLeft_Right linear 0.2s'
        }

        const btn = document.querySelector(`#about .slide_show .btn-${slide}`)
        btn.style.opacity = '1'

    }, [slide])


    return (
        <>
            <Header />
            <main id="about">
                <div className="head" key={1}>
                    <div className="head-content">
                        <h1>About</h1>
                        <p>
                            Home
                            <i className="fas fa-angle-right"></i>
                            About Us
                        </p>
                    </div>
                </div>
                <div className="wel">
                    <div className="wel_left">
                        <h1 className="welcome">Welcome!</h1>
                        <h1>Best burger ideas & traditions from the whole world</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                        <p>Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum.
                            Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat.
                        </p>
                        <div>
                            <Link to="/contact">Contact Now</Link>
                        </div>
                    </div>
                    <div className="wel_right">
                        <img className="img" src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/image2-h4.jpg" />
                    </div>
                </div>

                <div className="our_Quanlity">
                    <div className="container">
                        <div className="OQ_Content">
                            <h1 className="change_font">Our Quality</h1>
                            <h1>Chicken</h1>
                            <p>Quality is our #1 ingredient.
                                That’s why our Chicken Wings, Chicken Bites and Grilled Chicken Topping are made from chickens raised without antibiotics and fed an all vegetable-grain diet, with no animal by-products.
                                Plus, our Bites are made with 100% chicken breast meat.
                            </p>
                            <div className="order">
                                <Link to="#">ORDER NOW</Link>
                            </div>
                        </div>
                        <div className="OQ_Img">
                            <img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/about-imager-5.png" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="OQ_Img">
                            <img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/about-imager-6.png" />
                        </div>
                        <div className="OQ_Content_left">
                            <h1 className="change_font">Our Quality</h1>
                            <h1>Pizza Douch</h1>
                            <p>Quality is our #1 ingredient. That’s why our Chicken Wings, Chicken Bites and Grilled Chicken Topping are made from chickens raised without antibiotics and fed an all vegetable-grain diet, with no animal by-products.
                                Plus, our Bites are made with 100% chicken breast meat.
                            </p>
                            <div className="order">
                                <Link to="#">ORDER NOW</Link>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="OQ_Content">
                            <h1 className="change_font">Our Quality</h1>
                            <h1>Pizza Douch</h1>
                            <p>Quality is our #1 ingredient. That’s why our Chicken Wings, Chicken Bites and Grilled Chicken Topping are made from chickens raised without antibiotics and fed an all vegetable-grain diet, with no animal by-products.
                                Plus, our Bites are made with 100% chicken breast meat.
                            </p>
                            <div className="order">
                                <Link to="#">ORDER NOW</Link>
                            </div>
                        </div>
                        <div className="OQ_Img">
                            <img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/about-imager-7.png" />
                        </div>
                    </div>
                </div>

                <div className="slide_show">
                    <div className="opaci"></div>
                    <p className="btn_left" onClick={handleLeft}>
                        <i className="fa-solid fa-angle-left fa-5x"></i>
                    </p>
                    <p className="btn_right" onClick={handleRight}>
                        <i className="fa-solid fa-angle-right fa-5x"></i>
                    </p>
                    <div className="btn">
                        <button className="btn-1" onClick={() => { handleBtn(1) }}></button>
                        <button className="btn-2" onClick={() => { handleBtn(2) }}></button>
                        <button className="btn-3" onClick={() => { handleBtn(3) }}></button>
                        <button className="btn-4" onClick={() => { handleBtn(4) }}></button>
                    </div>
                    <div className="content content-1">
                        <div className="element-rating">
                            <div className="img">
                                <img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/avatar-1.jpg" />
                            </div>
                            <div className="star">
                                <div>
                                    <i className="star-1 fa-solid fa-star"></i>
                                    <i className="star-2 fa-solid fa-star"></i>
                                    <i className="star-3 fa-solid fa-star"></i>
                                    <i className="star-4 fa-solid fa-star"></i>
                                    <i className="star-5 fa-solid fa-star-half-stroke"></i>
                                </div>
                            </div>
                            <h2> “Forget the trendy pizza shops, This hidden spot makes the best New York-style pizza slice in naples”</h2>
                            <h3>STEPHEN TINDLE</h3>
                            <h4>CEO, APPLE</h4>
                        </div>
                    </div>


                    <div className="content content-2">
                        <div className="element-rating">
                            <div className="img">
                                <img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/avatar-2.jpg" />
                            </div>
                            <div className="star">
                                <div>
                                    <i className="star-1 fa-solid fa-star"></i>
                                    <i className="star-2 fa-solid fa-star"></i>
                                    <i className="star-3 fa-solid fa-star"></i>
                                    <i className="star-4 fa-solid fa-star"></i>
                                    <i className="star-5 fa-solid fa-star"></i>
                                </div>
                            </div>
                            <h2>  "I would be lost without restaurant. I would like to personally thank you for your outstanding product."</h2>
                            <h3>NINA MARGARET</h3>
                            <h4>CEO, APPLE</h4>
                        </div>
                    </div>

                    <div className="content content-3">
                        <div className="element-rating">
                            <div className="img">
                                <img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/avatar-4.jpg" />
                            </div>
                            <div className="star">
                                <div>
                                    <i className="star-1 fa-solid fa-star"></i>
                                    <i className="star-2 fa-solid fa-star"></i>
                                    <i className="star-3 fa-solid fa-star"></i>
                                    <i className="star-4 fa-solid fa-star"></i>
                                    <i className="star-5 fa-solid fa-star"></i>
                                </div>
                            </div>
                            <h2>  "I am completely blown away. I would also like to say thank you to all your staff. It's really wonderful."</h2>
                            <h3>CLARA</h3>
                            <h4>Manager</h4>
                        </div>
                    </div>

                    <div className="content content-4">
                        <div className="element-rating">
                            <div className="img">
                                <img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/avatar-3.jpg" />
                            </div>
                            <div className="star">
                                <div>
                                    <i className="star-1 fa-solid fa-star"></i>
                                    <i className="star-2 fa-solid fa-star"></i>
                                    <i className="star-3 fa-solid fa-star"></i>
                                    <i className="star-4 fa-solid fa-star"></i>
                                    <i className="star-5 fa-solid fa-star-half-stroke"></i>
                                </div>
                            </div>
                            <h2>  "Without food, we would have gone bankrupt by now. Thanks food! The service was excellent."</h2>
                            <h3>JOHN DOE</h3>
                            <h4>Manager</h4>
                        </div>
                    </div>

                </div>

                <div className="chef">
                    <h1>Always Quality</h1>
                    <h2>Our Talented Chefs</h2>
                    <div className="container">
                        <div className="item">
                            <div className="image">
                                <div className="hover-bg"></div>
                                <img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/box-team-1-2.jpg" />
                                <div>
                                    <span>CHEF</span>
                                </div>
                            </div>
                            <div className="content">
                                <h2>WILLIAM SMITH</h2>
                                <p>Everything We Pizza, We Pizza With Love. Designer Fastfood.</p>
                                <div className="icon">
                                    <i className="fa-brands fa-facebook"></i>
                                    <i className="fa-brands fa-twitter"></i>
                                    <i className="fa-brands fa-google-plus"></i>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image">
                                <div className="hover-bg"></div>
                                <img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/box-team-2-1.jpg" />
                                <div>
                                    <span>MANAGER</span>
                                </div>
                            </div>
                            <div className="content">
                                <h2>JOHN DOE</h2>
                                <p>Everything We Pizza, We Pizza With Love. Designer Fastfood.</p>
                                <div className="icon">
                                    <i className="fa-brands fa-facebook"></i>
                                    <i className="fa-brands fa-twitter"></i>
                                    <i className="fa-brands fa-google-plus"></i>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image">
                                <div className="hover-bg"></div>
                                <img src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/box-team-6-1.jpg" />
                                <div>
                                    <span>CHEF</span>
                                </div>
                            </div>
                            <div className="content">
                                <h2>BRADD L.</h2>
                                <p>Everything We Pizza, We Pizza With Love. Designer Fastfood.</p>
                                <div className="icon">
                                    <i className="fa-brands fa-facebook"></i>
                                    <i className="fa-brands fa-twitter"></i>
                                    <i className="fa-brands fa-google-plus"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="foot">
                    <div className="content">
                        <h1>We guarantee</h1>
                        <h2>30 Minutes Delivery!</h2>
                        <p>If you’re having a meeting, working late at night and need an extra push.
                            <br />Let us know and we will be there
                        </p>
                        <div>
                            <span>MAKE AN ORDER</span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default About;