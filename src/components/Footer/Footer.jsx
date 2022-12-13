import React from 'react';
import './Footer.css';
import instagram from '../../images/instagram-logo.png';
import pinterest from '../../images/sozial.png';
import twitter from '../../images/twitter-1.png';
import facebook from '../../images/facebook-logo.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="info">
                <h3>Info</h3>
                <p>
                    Carefully curated online design store. Featuring simple.
                    <br />
                    beautiful and thoughtfully designed products for
                    <br />
                    everyday use
                </p>
            </div>
            <div className="contact">
                <h3>Get in touch</h3>
                <p>hello@thedsnshop.com</p>
                <p>Los Angeles,CA </p>
            </div>
            <div className="newsletter">
                <h3>Newsletter</h3>
                <p>
                    <span>Sign up</span>for the latest arrivals,
                    <br />
                    special offers and weekly picks
                </p>
            </div>
            <div className="social">
                <h3>Follow us</h3>
                <img src={instagram} alt="instagram-logo" />
                <img src={pinterest} alt="pinterest-logo" />
                <img src={twitter} alt="twitter-logo" />
                <img src={facebook} alt="facebook-logo" />
            </div>
            <div className="copyrights">©2021 The Design Shop</div>
            <div className="footer-links">
                <a href="#">Disclaimer</a>
                <a href="#">Shop</a>
                <a href="#">Weekly picks</a>
            </div>
            <div className="designer">Made/Curated by Feras</div>
        </div>
    );
};

export default Footer;
