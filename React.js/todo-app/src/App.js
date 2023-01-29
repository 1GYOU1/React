import { useCallback, useRef, useReducer } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
function createBulkTodo (){
    const array = [];
    for(let i=1; i<=2500;i++){
        array.push({
            id:i,
            text:`할 일 ${i}`,
            checked: false,
        });
    }
    return array;
}

function todoReducer(todos, action){
    switch(action.type){
        case 'INSERT' : // 새로 추가
        //{type: 'INSERT', todo: {id : 1, text: 'todo', checked : false}}
        return todos.concat(action.todo);
        case 'REMOVE' : // 제거
        //{type : 'REMOVE', id: 1}
        return todos.filter(todo => todo.id !== action.id);
        case 'TOGGLE' : //토글
        //{type: 'TOGGLE', id : 1}
        return todos.map(todo => todo.id === action.id ? {...todo, checked: !todo.checked} : todo);
        default: return todos;
    }
}


function App() {
   //todoReducer, undefined, createBulkTodo(reducer 함수, createBulkTodo, 초기값): 두 번째 undefined 세번째 createBulkTodo 처음 한 번만 렌더링 됨
    const [todos, dispatch] = useReducer(todoReducer,undefined,createBulkTodo);

    const nextId = useRef(2501);//4번째를 의미하고, 변하는 값
    const onInsert = useCallback(
    (text) => {//text 전달받는 값
    const todo = {
                //.current속성으로 접근방식
        id: nextId.current,
        text,
        checked: false,
    };
    dispatch({type:'INSERT', todo});
    //todo를 추가한 뒤에 nextId 값 +1 추가
        nextId.current += 1;
    },
    //데이터 추가한 뒤에 업그레이드 시켜주기(리렌더링)
    [],
    );

    //클릭시 리스트 삭제

    const onRemove = useCallback(
        (id) => { //id값을 받아 지운 id랑 다르면 남겨라.
            dispatch({type: 'REMOVE', id});
        },
        [],
    );

    //클릭시 checkbox 아이콘 변경
    const onToggle = useCallback(
        (id) => {
            dispatch({type:'TOGGLE', id});
        },
        []
    );

    return (
      <TodoTemplate>
          <TodoInsert onInsert = {onInsert}/>
          <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    );
}

export default App;