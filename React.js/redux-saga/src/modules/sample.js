import { createAction, handleActions } from "redux-actions";
import * as api from "../lib/api";
import {/* call, put, */takeLatest } from "redux-saga/effects";
// import { finishLoading, startLoading } from "./loading";
import createRequestSaga from "../lib/createRequestSaga";

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
// const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
// const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

export const getPost = createAction(GET_POST, (id) => id);
export const getUsers = createAction(GET_USERS);

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

const initialState = {
  post: null,
  users: null,
};
const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload,
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload,
    }),
  },
  initialState
);

export default sample;

// import { createAction, handleActions } from 'redux-actions';
// import * as api from '../lib/api';
// import {/* call, put,*/ takeLatest } from 'redux-saga/effects';
// // import { finishLoading, startLoading } from './loading';
// import createRequestSaga from '../lib/createRequestSaga';


// const GET_POST = 'sample/GET_POST';
// const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
// // const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

// const GET_USERS = 'sample/GET_USERS';
// const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
// // const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

// // thunk 함수를 생성
// // thunk 함수의 내부에서는 시작할때, 성공할때, 실패할때에 따른 액션을
// // 발생하도록 구현한것.

// export const getPost = createAction(GET_POST, id => id);
// export const getUsers = createAction(GET_USERS);

// const getPostSaga = createRequestSaga(GET_POST, api.getPost);
// const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

// function* getPostSaga(action){
//     yield put(startLoading(GET_POST));   //로딩시작
//         //action을 받아오면 액션의 정보를 조회할 수 있다.
//     try{
//         //call을 사용하면 promis를 반환하는 함수를 호출하고 기다릴 수 있다.
//         const post = yield call(api.getPost, action.payload);   
//         yield put({
//             type:GET_POST_SUCCESS,
//             payload:post.data
//         });
//     }catch(e){
      
//         yield put({
//             type:GET_POST_FAILURE,
//             payload:e,
//             error:true
//         });
//     }
//     yield put(finishLoading(GET_POST));  //로딩완료
// }

// function* getUsersSaga(){
//     yield put(startLoading(GET_USERS));
//     try{ //call을 사용하면 promise를 반환하는 함수를 호출하고 기다릴 수 있다.
//         //call 파라미터함수, 해당 함수에 넣을 인수
//         //api.getPost(action.payload);
//         const user = yield call(api.getUsers);
//         yield put({
//             type:GET_USERS_SUCCESS,
//             payload:user.data
//         });
//     }catch(e){
//         yield put({
//             type:GET_USERS_FAILURE,
//             payload:e,
//             error:true
//         })
//     }
//     yield put(finishLoading(GET_USERS)); //로딩완료
// }


// export function* sampleSaga(){
//     yield takeLatest(GET_POST, getPostSaga);
//     //액션이 중첩되면 기존것들을 무시하고 가장 마지막 액션만 처리한다
//     yield takeLatest(GET_USERS, getUsersSaga);
// }

// const initialState ={
//     post:null,
//     users:null
// }
// const sample = handleActions(
//     {
//     [GET_POST_SUCCESS] : (state, action) =>({
//         ...state,
//         post:action.payload
//     }),
//     [GET_USERS_SUCCESS] : (state, action) =>({
//         ...state,
//         users:action.payload
//     }),
// },
//     initialState
// );

// export default sample