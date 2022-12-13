import React from 'react';
import './Gallery.css';
import img1 from '../../images/01-Home.png';
import img2 from '../../images/29-Lifestyle_b-o.png';
import img3 from '../../images/01-Books.png';
import img4 from '../../images/02-Lifestyle.png';
import img5 from '../../images/46-Home_bm.png';
import img6 from '../../images/45-Home_hem.png';
import Product from '../Product/Product';

const products = [
    { name: 'Vifa Copenhagen 2.0 Loudspeaker', price: '799.00$', image: img1 },
    {
        name: 'Bang & Olufsen Wireless Headphones',
        price: '174.00$',
        image: img2,
    },
    { name: 'Poketo: Creative spaces', price: '25.00$', image: img3 },
    { name: 'Ucon Acrobatics Hajo Backpack', price: '79.00$', image: img4 },
    {
        name: 'Summer Print by Bratislav Milenkovic',
        price: '27.00$',
        image: img5,
    },
    {
        name: 'Palo Modular Corner Sofa by Hern',
        price: '3,699.00$',
        image: img6,
    },
];

const Gallery = () => {
    return (
        <div className="gallery">
            {products.map((product) => {
                return (
                    <div className="wrapper">
                        <Product
                            name={product.name}
                            price={product.price}
                            image={product.image}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Gallery;
