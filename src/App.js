import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer';
import Navigatoin from './components/Navigation';
import Product from './components/Product';
import Banner from './components/Banner';
import SeeMoreButton from './components/SeeMoreButton';
import './App.css';

function App() {
  const productListMain = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 4' },
    { id: 5, name: 'Product 5' },
    { id: 6, name: 'Product 6' },
    { id: 7, name: 'Product 7' }
];

const productListNew = [
  { id: 8, name: 'Product 8' },
  { id: 9, name: 'Product 9' },
  { id: 10, name: 'Product 10'},
];

const maxProductsToShow = 6;
const renderedProductsMain = productListMain.slice(0, maxProductsToShow).map(product => (
    <Product key={product.id} name={product.name} id={product.id} />));
const renderedProductsNew = productListNew.slice(0, maxProductsToShow).map(product => (
    <Product key={product.id} name={product.name} id={product.id} />
));
  return (
    <div className="App">
          <Navigatoin />
          <Banner title="Banner!" />
          <div>
                <h2>Products List:</h2>
                {renderedProductsMain}
                {productListMain.length > maxProductsToShow && <SeeMoreButton />}
            </div>
            <div>
                <h2>NEW PRODUCTS:</h2>
                {renderedProductsNew}
                {productListNew.length > maxProductsToShow && <SeeMoreButton />}
            </div>
          <Footer />
    </div>
  );
}

export default App;
