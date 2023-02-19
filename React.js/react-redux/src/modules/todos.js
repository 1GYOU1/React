import produce from "immer";
import { createAction, handleActions } from "redux-actions";

//액션 객체 생성
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; //인풋 값을 변경
const INSERT = 'todos/INSERT'; //새로운 todo 등록함
const TOGGLE = 'todos/TOGGLE'; //todo를 체크/ 체크 해제
const REMOVE = 'todos/REMOVE'; //todo를 제거
//액션 생성 함수 만들기
export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3;
export const insert = createAction(INSERT, text => ({
    id: id++,
    text,
    done: false
}))

export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

//초기상태 정의
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true,
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false,
    },
  ],
};

//리듀서 함수 만들기
const todos = handleActions({
    [CHANGE_INPUT]: (state, { payload: input }) =>
    produce(state, (draft) => {
      draft.input = input;
    }),
    [INSERT]:(state, { payload:todo }) =>
    produce(state, draft => {
        draft.todos.push(todo);
    }),
    [TOGGLE]:(state, { payload:id }) => 
    produce(state, draft => {
        const todo = draft.todos.find(todo => todo.id === id);
        todo.done = !todo.done;
    }),
    [REMOVE] : (state, { payload:id }) => ({
        ...state,
        todos:state.todos.filter(todo => todo.id !== id)
    })
},
    initialState
)

export default todos;

// -------------

// import { createAction, handleActions } from "redux-actions";

// //액션 객체 생성
// const CHANGE_INPUT = 'todos/CHANGE_INPUT'; //인풋 값을 변경
// const INSERT = 'todos/INSERT'; //새로운 todo 등록함
// const TOGGLE = 'todos/TOGGLE'; //todo를 체크/ 체크 해제
// const REMOVE = 'todos/REMOVE'; //todo를 제거
// //액션 생성 함수 만들기
// export const changeInput = createAction(CHANGE_INPUT, input => input);

// let id = 3;
// export const insert = createAction(INSERT, text => ({
//     id: id++,
//     text,
//     done: false
// }))

// export const toggle = createAction(TOGGLE, id => id);
// export const remove = createAction(REMOVE, id => id);

// //초기상태 정의
// const initialState = {
//   input: '',
//   todos: [
//     {
//       id: 1,
//       text: '리덕스 기초 배우기',
//       done: true,
//     },
//     {
//       id: 2,
//       text: '리액트와 리덕스 사용하기',
//       done: false,
//     },
//   ],
// };

// //리듀서 함수 만들기
// const todos = handleActions({
//     [CHANGE_INPUT] : (state, action) => ({...state, input:action.payload}),
//     [INSERT]: (state, action) => ({
//         ...state,
//         todos: state.todos.concat(action.payload),
//     }),
//     [TOGGLE]: (state, action) => ({
//         ...state,
//         todos:state.todos.map(todo => 
//             todo.id === action.payload ? {...todo, done: !todo.done} : todo)
//     }),
//     [REMOVE] : (state, action) => ({
//         ...state,
//         todos:state.todos.filter(todo => todo.id !== action.payload)
//     })
// },
//     initialState
// )

// export default todos;