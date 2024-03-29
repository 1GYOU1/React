import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {createStore} from 'redux' 해당라인 ----처리되어 ctrl 클릭해서 하단 코드로 바꿔주기.
import { applyMiddleware, legacy_createStore as createStore} from 'redux';
// import loggerMiddleware from './lib/loggerMiddleware'
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import rootReducer from './modules';//해당라인처럼 작성하면 modules의 모든 파일 include
import { createLogger } from 'redux-logger'
import ReduxThunk from "redux-thunk";
// import { composeWithDevTools } from 'redux-devtools-extension';

const root = ReactDOM.createRoot(document.getElementById('root'));
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));
//store를 비동기로 처리해서

// const store = createStore(rootReducer,composeWithDevTools());
// const store = createStore(rootReducer,applyMiddleware(loggerMiddleware));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

reportWebVitals();
