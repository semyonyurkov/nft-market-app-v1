import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
ReactDOM.render(
    // <Provider>
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    // </Provider>
    rootElement
);
