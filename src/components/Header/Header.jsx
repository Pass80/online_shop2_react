import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <h3>THE DESIGN SHOP</h3>
                <ul>
                    <li>Featured</li>
                    <li>Lifestyle</li>
                    <li>Books</li>
                    <li>Digital</li>
                </ul>
                <div className="links">
                    <a href="#">Weekly Picks</a>
                    <a href="#">The Design Blog</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;
