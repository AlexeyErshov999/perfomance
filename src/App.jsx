import React from 'react';
import ReactDOM from 'react-dom/client';
import { Main } from './react-components/Main.jsx';
import { Header } from './react-components/Header.jsx';
import './styles/reset.css';
import './styles/styles.css';

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <div>
            <Header/>
            <Main />
        </div>
    </React.StrictMode>,
)