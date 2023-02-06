import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ToDoListpartOne from './ToDoListpartOne';
import CoinTracker from './CoinTracker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        {/*<App />*/}{/* #6 EFFECTS */}
        {/* <ToDoListpartOne /> */}{/* #7.1 ~ #7.2 */}
        <CoinTracker />{/* #7.3 Coin Tracker */}
    </>
);
