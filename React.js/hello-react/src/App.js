// import "./App.css";
// import React, { Component } from "react";

// class App extends Component {
//   render() {
//     const name = "리액트";
//     return <div className="react">{name}</div>;
//   }
// }

import Counter from './Counter';
import MyComponent from './MyComponent';
import Say from './Say';

const App = () => {
    return (
        <div>
            <div>
                <MyComponent name={'3'} favoriteNumber={5}>
                    리액트
                </MyComponent>
            </div>
            <div>
                <Counter />
            </div>
            <div>
                <Say />
            </div>
        </div>
    );
};

export default App;
