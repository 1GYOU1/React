import React, { Component } from 'react';
import './App.css';
import ValidationSample from './ValidationSample'; //23-01-08
import ScrollBox from './ScrollBox'; //23-01-08
import IterationSample from './IterationSample'; //23-01-08

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>ValidationSample - DOM에 접근하기</h2>
                    <ValidationSample />
                </div>
                <div>
                    <h2>ScrollBox</h2>
                    <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
                    <button onClick={() => this.scrollBox.scrollToBottom()}>
                        맨밑으로
                    </button>
                </div>
                <div>
                    <IterationSample />
                </div>
            </div>
        );
    }
}
export default App;

//----------------------------------------------------------------
//2023-01-08 중간 기록 ↓↓↓

// import Counter from './Counter'; //22-12-18
// import MyComponent from './MyComponent'; //22-12-18
// import Say from './Say'; //22-12-18
// import EventPractice_c from './EventPractice_c'; //23-01-08
// import EventPractice_f from './EventPractice_f'; //23-01-08

// const App = () => {
//     return (
//         <div>
//             <div>
//                 <EventPractice_c />
//                 {/*EventPractice_f.js 연결*/}
//             </div>
//             <div>
//                 <EventPractice_f />
//                 {/*EventPractice_f.js 연결*/}
//             </div>
//             <div>
//                 <MyComponent name={'3'} favoriteNumber={5}>
//                     리액트
//                 </MyComponent>
//             </div>
//             <div>
//                 <Counter />
//                 {/*Counter.js 연결*/}
//             </div>
//             <div>
//                 <Say />
//                 {/*Say.js 연결*/}
//             </div>
//         </div>
//     );
// };

// export default App;
