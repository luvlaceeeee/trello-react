import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './tailwind.css'
import Layout from "./components/Layout";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div className='p-2 bg-gray-700 h-screen'>
          <App/>
      </div>
  </React.StrictMode>
);

