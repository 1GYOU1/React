//modules 폴더의 index.js는 root
import {combineReducers} from 'redux';
import counter from './counter';
import todos from './todos'

/*
combineReducers를 사용하여 여러개를 합쳐 rootReducer 하나로 선언해줄 수 있음.
import rootReducer from './modules'; 방식으로 불러와서 사용.
index.js가 modules 디렉토리의 루트파일이 되어서 가능하다.
*/
const rootReducer = combineReducers(
    {
        counter,
        todos,
    }
)

export default rootReducer;
