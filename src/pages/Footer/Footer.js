

import "@fortawesome/fontawesome-free/css/all.min.css"

import "@fortawesome/fontawesome-free/css/all.min.css"

// import './Footer.css'
import './Footer.scss'

function Footer() {
    return (
        <footer>
            <div className="main-footer">
                <div>
                    <h2>address</h2>
                    <p>570 8th Ave,<br /> New York, NY 10018<br /> United States</p>
                </div>
                <div>
                    <h2>
                        book a table
                    </h2>
                    <p>Dogfood och Sliders foodtruck.<br />Under Om oss kan ni läsa </p>
                </div>
                <div>
                    <h2>opening hours</h2>
                    <p>Monday – Friday: <span>8am – 4pm</span> <br /> Saturday: <span>9am – 5pm</span></p>
                    <div className="four-icons">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-instagram-square"></i>
                    </div>
                </div>
                <div>
                    <h2>newsletter</h2>
                    <p>Subscribe to the weekly <br /> newsletter for all <br /> the latest updates</p>
                </div>
            </div>

            <div className="footer-bottom">
                <div>
                    <p>Copyright © 2022. All Rights Reserved.
                    </p>
                </div>
                <div>
                    <img src={require("../../image/footer_img1.png")} alt="" />
                </div>
            </div>
        </footer>
    )
}
export default Footer;