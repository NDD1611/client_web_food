

import { useEffect } from "react"
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

// import "./contact.css"
import './Contact.scss'
import Header from "../Header/Header.js"
import Footer from "../Footer/Footer.js"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 10.0299337,
            lng: 105.7684266
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCZ8DhlewFk-nycyyHQw38_VOyxJrs_PXU" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={10.0299337}
                        lng={105.7684266}
                        text="My School"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}


function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Header />
            <main id="contact">
                <div className="head">
                    <div className="head-content">
                        <h1>Contact Us</h1>
                        <p>
                            Home
                            <i className="fas fa-angle-right"></i>
                            Contact Us
                        </p>
                    </div>
                </div>
                <div className="middle">
                    <h2>Call us or visit place</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="info">
                        <div>
                            <div className="icon-info">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                            <h3>Phone:</h3>
                            <p>+ 44 123 456 78 90 <br /> + 844 123 444 77 88</p>
                        </div>
                        <div>
                            <div className="icon-info">
                                <i className="fas fa-map-marked"></i>
                            </div>
                            <h3>Address</h3>
                            <p>Box 565, Pinney's Beach, Charlestown, <br />  Nevis, West Indies, Caribbean</p>
                        </div>
                        <div>
                            <div className="icon-info">
                                <i className="far fa-envelope"></i>
                            </div>
                            <h3>Email:</h3>
                            <p>contact@example.com<br /> info@example.com</p>
                        </div>
                    </div>
                    <div className="map-form">

                        <div id="map">
                            <SimpleMap />
                        </div>


                        <div id="form">
                            <h2>Send us a message</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div className="name">
                                <input type="text" placeholder="Your Name..." />
                            </div>
                            <div className="email">
                                <input type="text" placeholder="Email..." />
                            </div>
                            <div className="subject">
                                <input type="text" placeholder="Subject..." />
                            </div>
                            <div className="comment">
                                <textarea name="" id="" rows="8" placeholder="Comment..."></textarea>
                            </div>
                            <div className="btn-submit">
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    )
}

export default Contact;