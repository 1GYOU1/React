import { useState } from 'react';
import Average from './Average';
import Counter from './Counter';
import Info from './Info';

function App() {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <div>
                <Average />
            </div>
            <div>
                <Counter />
            </div>
            <div>
                <h2>useState를 여러번 사용하기</h2>
                <button
                    onClick={() => {
                        setVisible(!visible);
                    }}
                >
                    {visible ? '숨기기' : '보이기'}
                </button>
                <hr />
                {visible && <Info />}
                {/*visible 이 true면 Info가 보임*/}
            </div>
        </div>
    );
}

export default App;
