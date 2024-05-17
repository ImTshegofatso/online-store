import React from 'react';
import { connect } from 'react-redux';
import { addProduct } from './actions'; // Import your addProduct action
import './components/LandingPage.css';
import image1 from './images/mt21541ag_nb_70_i.webp';
import image2 from './images/mt21541prp_nb_71_i.webp';
import image3 from './images/mt41534sot_nb_55_i.webp';
import image4 from './images/wj41553dek_nb_55_i.webp';
import image5 from './images/wj33507kou_nb_73_i.webp';
import image6 from './images/wj41553dek_nb_55_i.webp';
import image7 from './images/mp31529ack_nb_55_i.webp';
import image8 from './images/mp33589tfn_nb_55_i.webp';
import image9 from './images/mp41503ag_nb_71_i.webp';
import image10 from './images/mj33515bk_nb_55_i.webp';

// Array of featured products
const featuredProducts = [
  { id: 1, name: 'MADE in USA Core Crewneck Sweatshirt', description: 'Manufactured in the U.S., from domestically sourced fabrics, MADE in USA apparel brings timeless quality and craftsmanship to everyday staples. The Made in USA Crew is made from heavyweight French terry and features an embroidered patch logo as well as ribbed cuffs and hem.', price: 1980, category: '', stock: 20, image: image1 },
  { id: 2, name: 'Silk Jacket', description: 'This is product 2', price: 2000, category: '', stock: 30, image: image2 },
  { id: 3, name: 'Athletics French Terry Hoodie', description: 'An elevated take on a timeless classic, this relaxed fit hoodie features soft, French terry construction and an embroidered New Balance logo.', price: 1300, category: '', stock: 40, image: image3 },
  { id: 4, name: 'Athletics Packable Jacket', description: 'Premium details and a versatile design make this woven jacket the perfect choice for everyday wear.', price: 1400, category: '', stock: 50, image: image4 },
  { id: 5, name: 'Linear Heritage Woven Bomber Jacket', description: 'A modern take on NB heritage style, this bomber jacket offers a timeless look great for everyday wear.', price: 1780, category: '', stock: 60, image: image5 },
  { id: 6, name: 'Sportswears Greatest Hits Woven Jacket', description: 'A classic, sport heritage inspired silhouette, reinterpreted with modern fabrics and an oversized fit.', price: 1600, category: '', stock: 70, image: image6 },
  { id: 7, name: 'AT Woven Pant', description: 'Comfort and style connect in the New Balance AT Woven Pant. Crafted with a polyknit stretch fabric and featuring a relaxed fit, these athletic pants are sporty statement pieces inspired by the outdoors.', price: 900, category: '', stock: 80, image: image7 },
  { id: 8, name: 'Hoops Woven Pant', description: 'Inspired by classic basketball gear, the New Balance Hoops Woven Pant features a timeless design for effortless style. This athletic pant is crafted from woven nylon fabric for easy movement in a roomy, relaxed fit for overall comfort no matter what you have planned for the day.', price: 1000, category: '', stock: 90, image: image8 },
  { id: 9, name: 'Sport Essentials Fleece Jogger', description: 'With soft brushed fleece fabric and a relaxed fit, this jogger delivers comfort, and features an embroidered logo at the left thigh.', price: 900, category: '', stock: 100, image: image9 },
  { id: 10, name: 'NB Essentials Coaches Jacket', description: 'The New Balance NB Essentials Coaches Jacket is ready to be your next layering piece. Featuring an iconic silhouette including a full front snap closure, this jacket has a classic look that gives your casual wear a stylish finishing touch. The relaxed fit offers an updated take on an all-around classic.', price: 1300, category: '', stock: 10, image: image10 },
];

function LandingPage({ addToCart }) {
  return (
    <div>
      <h1 className="center-text"><span className="welcome-span">Welcome</span> to our online store!</h1>
      <h2 className="center-text">Here you'll find the best products at the best prices!!.</h2>
      <h2 className="center-text">Featured Products</h2>
      <div className="products-grid">
        {featuredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="description-text">{product.description}</p>
            <p>Price: R{product.price}</p>
            <p>Category: {product.category}</p>
            <p>In Stock: {product.stock}</p>
            <button className="buy-button" onClick={() => addToCart(product)}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addToCart: product => dispatch(addProduct(product)), // Dispatch addProduct action
});

export default connect(null, mapDispatchToProps)(LandingPage);

