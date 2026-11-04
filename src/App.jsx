import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';

function App() {
  // 'login', 'register', 'products', 'addProduct' यापैकी एक स्क्रीन दाखवण्यासाठी state
  const [currentView, setCurrentView] = useState('products');

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Multi-Vendor E-Commerce</h1>
      
      {/* Navigation Bar */}
      <nav style={{ textAlign: 'center', marginBottom: '20px', padding: '10px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #ddd' }}>
        <button 
          onClick={() => setCurrentView('products')}
          style={{ padding: '8px 16px', marginRight: '10px', backgroundColor: currentView === 'products' ? '#007bff' : '#fff', color: currentView === 'products' ? '#fff' : '#000', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' }}
        >
          View Products
        </button>
        <button 
          onClick={() => setCurrentView('addProduct')}
          style={{ padding: '8px 16px', marginRight: '10px', backgroundColor: currentView === 'addProduct' ? '#17a2b8' : '#fff', color: currentView === 'addProduct' ? '#fff' : '#000', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' }}
        >
          Add Product (Seller)
        </button>
        <button 
          onClick={() => setCurrentView('login')}
          style={{ padding: '8px 16px', marginRight: '10px', backgroundColor: currentView === 'login' ? '#28a745' : '#fff', color: currentView === 'login' ? '#fff' : '#000', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' }}
        >
          Login
        </button>
        <button 
          onClick={() => setCurrentView('register')}
          style={{ padding: '8px 16px', backgroundColor: currentView === 'register' ? '#ffc107' : '#fff', color: currentView === 'register' ? '#fff' : '#000', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' }}
        >
          Register
        </button>
      </nav>

      {/* Dynamic Content Display */}
      <div>
        {currentView === 'products' && <ProductList />}
        {currentView === 'addProduct' && <AddProduct />}
        {currentView === 'login' && <Login />}
        {currentView === 'register' && <Register />}
      </div>
    </div>
  );
}

export default App;