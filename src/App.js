import './App.css';
import Dashboard_total from './components/Admin_dashboard/Dashboard_total/Dashboard_total';
import Recylcing_history from './components/Admin_dashboard/Recycling_history/Recylcing_history';
import React from 'react';
import Products_in_stock from './components/Store/Products_in_stock/Products_in_stock';
import Store from './components/Store/Store';
import Admin_dashboard from './components/Admin_dashboard/Admin_dashboard';
import Sales from './components/Store/Sales/Sales';

function App() {
  return (
    <div className="App">
      <Admin_dashboard/>
  <Store/>
      </div>
  );
}

export default App;
