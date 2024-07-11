import React from 'react';
import ReactDOM from 'react-dom/client';
import { Main } from './components/Main.jsx';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import './styles/reset.css';
import './styles/styles.css';

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <>
            <Header/>
            <Main />
            <Footer />
        </>
    </React.StrictMode>,
)