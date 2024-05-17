import React from 'react';
import { connect } from 'react-redux';
import { addProduct } from './actions'; // Import your addProduct action
import './components/StorePage.css'; // Import your CSS file

//import the images
import Image1 from './storeimg/327.jpg';
import Image2 from './storeimg/550.jpg';
import Image3 from './storeimg/ct302.webp';
import Image4 from './storeimg/440.webp';
import Image5 from './storeimg/sweatpant.webp';
import Image6 from './storeimg/bb480.webp';
import Image7 from './storeimg/uxc72.webp';
import Image8 from './storeimg/mt580.webp';
import Image9 from './storeimg/mt41593bk_nb_55_i.webp';
import Image10 from './storeimg/mt33511bk_nb_70_i.webp';
import Image11 from './storeimg/mt31589wt_nb_7.webp';
import Image12 from './storeimg/lah91014ngo_nb_03_i.webp';
// List of products
const products = [
  { id: 1, name: 'New Balance 327', price: 2399, description: 'As recreational running established widespread popularity in the 1970s, the benchmark for running footwear shifted from mere existence to performance. While the era’s designs would be considered simple by today’s standards, the decade stands out as the moment when running shoes truly came into their own. The 327 sheds new light on the ‘70s as a time of innovation by boldly reshaping classic design elements with a thoroughly contemporary outlook. With, an angular reworking of the tried-and-true wedge silhouette, outsize, asymmetrically applied ‘N’ branding, and wraparound, trail-inspired lug outsole, the 327 provides nothing less than a complete reimagination of our running heritage.', category: 'Category 1', rating: 4, image: Image1 },
  { id: 2, name: 'New Balance 550', price: 2799, description: 'The original 550 debuted in 1989 and made its mark on basketball courts from coast to coast. After its initial run, the 550 was filed away in the archives, before being reintroduced in limited-edition releases in late 2020, and returned to the full-time lineup in 2021, quickly becoming a global fashion favorite. The 550’s low top, streamlined silhouette offers a clean take on the heavy-duty designs of the late ‘80s, while the dependable leather upper construction is a classic look in any era.', category: 'Category 2', rating: 5, image: Image2 },
  { id: 3, name: 'New Balance CT302', price: 300, description: 'Thanks to its blend of performance qualities and understated, casual elegance, the classic tennis shoe is a timeless style fixture. The CT302 expands the everyday wearability of the classic court silhouette, with an infusion of exaggerated proportions and unexpected details. Using a 1980s on-court model, the CT300, as a launching point, the CT302 adds a stacked height midsole, an outsized take on the classic cup outsole design and ‘N’ logo, along with the use of curved and wavy lines throughout the design.', category: 'Category 3', rating: 3, image: Image3 },
  { id: 4, name: 'New Balance 440 Numeric', price: 400, description: 'A cupsole skate shoe designed for the everyday skater, with input from the NB Numeric skate team.', category: 'Category 4', rating: 4, image: Image4 },
  { id: 5, name: 'Sweatpant', price: 2499, description: 'Manufactured in the U.S., from domestically sourced fabrics, MADE in USA apparel brings timeless quality and craftsmanship to everyday staples. The Made in USA Core Sweatpant is crafted with a premium, heavyweight French Terry material and features a mid rise cut, drawcord waistband and embroidered patch logo.', category: 'Category 5', rating: 5, image: Image5 },
  { id: 6, name: 'New Balance 480', price: 1999, description: 'Inspired by original game-day silhouettes, the 480 is simple, clean and classic.', category: 'Category 6', rating: 2, image: Image6 },
  { id: 7, name: 'New Balane XC-72', price: 2999, description: 'The new XC-72 pushes its classic sources of inspiration even further into unexplored territory, with a time-bending design inspired by the speculative technological optimism of 1970s concept cars. Three distinctive traction outsole patterns and angular features are employed to give the familiar low-cut sleekness of the era’s running shoes an aggressive, experimental edge. The XC-72 is the future that the past dreamed about, come to life.', category: 'Category 7', rating: 5, image: Image7 },
  { id: 8, name: 'New Balane 580', price: 2700, description: 'The 580 is one of the most distinctive models in New Balance history, and not simply because of its chunky, Rollbar-equipped, trail design. Originally an obscure, regional adaptation of the 585, the 580 began to turn heads as a fixture on the trendsetting streets of Harajuku. When it served as the canvas for some of the first-ever collaborative releases, the 580 became legendary. The newly reissued 580 brings an icon back to life. The modernized look of a slimmed down toe and reduced collar height is combined with an elevated material mix, as a classic mesh upper is overlaid with rich nubuck.', category: 'Category 8', rating: 4, image: Image8 },
  { id: 9, name: 'Sport Essentials AD T-Shirt', price: 530, description: 'This cotton tee features lifestyle graphics and a comfortable, relaxed fit.', category: 'Category 9', rating: 3, image: Image9 },
  { id: 10, name: 'NB Essentials Graphic T-Shirt', price: 499, description: 'Inspired by heritage NB style, the New Balance NB Essentials Graphic T-Shirt is a versatile addition to your everyday wear. Combining comfort and style, this t-shirt is made from breathable cotton fabric in a relaxed fit for unrestricted movement, and features an eye-catching graphic print on the back to showcase your bold style.', category: 'Category 10', rating: 5, image: Image10 },
  { id: 11, name: 'Hoops Cotton Jersey Short Sleeve T-shirt', price: 549, description: 'The New Balance Hoops Cotton Jersey Short Sleeve T-Shirt celebrates outdoor hoopers with a nostalgic graphic by hoops artist, Nathan Walker. With short sleeves, a relaxed fit, and a breathable cotton jersey fabric, this tee is designed to feel as good as it looks.', category: 'Category 11', rating: 5, image: Image11 },
  { id: 12, name: '6 Panel Classic Hat', price: 299, description: 'Finish any casual or athletic look with the 6-Panel Curved Brim NB Classic Cap for men and women.', category: 'Category 12', rating: 5, image: Image12 },
];

function StorePage({ addToCart }) {
  return (
    <div className="store-page">
      <h1>Store Page</h1>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: R{product.price}</p>
            <p className="description-text">Description: {product.description}</p>
            <p>Category: {product.category}</p>
            <p>Rating: {product.rating} stars</p>
            <button onClick={() => addToCart(product)}>Buy</button> {/* Add Buy button */}
          </div>
        ))}
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addToCart: product => dispatch(addProduct(product)), // Dispatch addProduct action
});

export default connect(null, mapDispatchToProps)(StorePage);
