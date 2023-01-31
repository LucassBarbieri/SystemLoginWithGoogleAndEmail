import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleProvider } from './components/Context/Context';
import { UserFirebaseProvider } from './components/Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleProvider>
      <UserFirebaseProvider>
        <App />
      </UserFirebaseProvider>
    </GoogleProvider>
  </React.StrictMode>
);

reportWebVitals();
