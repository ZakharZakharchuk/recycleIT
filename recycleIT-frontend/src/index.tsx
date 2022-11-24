import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
// import GoogleMapReact from 'google-map-react';
// import React from 'react';
// import App from './App';
// // import './index.css';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <div style={{width: '100%', height: '400px'}}>
//     <App/>
//   </div>,
//   document.getElementById('root')
// );
