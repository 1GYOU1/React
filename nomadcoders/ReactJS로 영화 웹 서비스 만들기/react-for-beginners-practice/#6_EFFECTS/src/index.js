import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ToDoListpartOne from './ToDoListpartOne';
import CoinTracker from './CoinTracker';
import PtacticeMovieApp from './PtacticeMovieApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        {/* <App /> */}{/* #6 EFFECTS */}
        {/* <ToDoListpartOne /> */}{/* #7.0 ~ #7.1 */}
        {/* <CoinTracker /> */}{/* #7.2 Coin Tracker */}
        <PtacticeMovieApp />{/* #7.3 ~ #7.4 Movie App */}
    </>
);
