import './App.css';
import ColorBox from './component/ColorBox';
import SelectColors from './component/SelectColors';
import { ColorProvider } from './contexts/color';

function App() {
    return (
        //Provider로 접근해서 value값 변경
        //value값 명시하지 않으면 변경안되고, error
        <ColorProvider value={{color:'red'}}>
            <div>
                <SelectColors />
                <ColorBox />
            </div>
        </ColorProvider>
    );
}

export default App;
