import { handleActions } from "redux-actions";
import * as api from '../lib/api';
import createRequestThunk from "../lib/createRequestThunk";

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';

// thunk 함수를 생성
// thunk 함수의 내부에서는 시작할때, 성공할때, 실패할때에 따른 액션을 
// 발생하도록 구현한것.

export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

const initialState ={
    post:null,
    users:null
}
const sample = handleActions(
    {
    [GET_POST_SUCCESS] : (state, action) =>({
        ...state,
        post:action.payload
    }),
    [GET_USERS_SUCCESS] : (state, action) =>({
        ...state,
        users:action.payload
    }),
},
    initialState
);

export default sample

//리펙토링 전
// import { handleActions } from "redux-actions";
// import * as api from '../lib/api';//* 모두라는 뜻
// import createRequestThunk from "../lib/createRequestThunk";

// const GET_POST = 'sample/GET_POST';
// const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
// const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

// const GET_USERS = 'sample/GET_USERS';
// const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
// const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

// //thunk 함수 생성
// //thunk 함수의 내부에서는 시작할때, 성공할때, 실패할때에 따른 액션을 발생하도록 구현한 것.
// // export const getPost = id => async dispatch => {
// //     dispatch({type:GET_POST}); // 요청을 시작 //GET_POST를 받아오고
// //     try{
// //         const response = await api.getPost(id);
// //         dispatch({
// //             type:GET_POST_SUCCESS,
// //             payload:response.data
// //         }); // 요청성공
// //     }catch(e){
// //         dispatch({
// //             type:GET_POST_FAILURE,
// //             payload:e,
// //             error:true
// //         });// 요청 실패
// //         throw e; 
// //     }
// // };

// // export const getUsers = () => async dispatch => {
// //     dispatch({type:GET_USERS}); // 요청시작
// //     try{
// //         const response = await api.getUsers();
// //         dispatch({
// //             type:GET_USERS_SUCCESS,
// //             payload:response.data
// //         }); // 요청 성공
// //     }catch(e){
// //         dispatch({
// //             type:GET_USERS_FAILURE,
// //             payload:e,
// //             error:true
// //         }); // 요청 실패
// //         throw e; 
// //     }
// // };

// export const getPost = createRequestThunk(GET_POST, api.getPost)
// export const getUsers = createRequestThunk(GET_USERS, api.getUsers)

// const initialState ={//초기화
//     loading:{//객체도 null값으로 초기화
//         GET_POST:false,
//         GET_USERS:false
//     },
//     post:null,
//     users:null
// }
// const sample = handleActions(
//     {
//     [GET_POST] : state =>({
//         ...state,
//         loading: {
//             ...state.loading,
//             GET_POST:true// 요청시작
//         }
//     }),
//     [GET_POST_SUCCESS] : (state, action) =>({//로딩이 성공했을 때
//         ...state,//상태값 받아오고
//         loading:{
//             ...state.loading,//로딩에서 state(상태)에 loading(로딩)을 확인하고 
//             GET_POST:false //성공했을때 요청이 완료되어 false로 해제시킴. 요청 완료 
//         },
//         post:action.payload//일괄로 action을 받아오기위한 명령
//     }),
//     [GET_POST_FAILURE] : (state, action) =>({//로딩이 실패했을 때
//         ...state,//상태값 받아오고
//         loading:{
//             ...state.loading,
//             GET_POST:false//로딩이 끝났다는 의미에 false로 해제. 요청완료 
//         }
//     }),
//     [GET_USERS]:state =>({
//         ...state,
//         loading:{
//             ...state.loading,
//             GET_USERS:true 
//         }
//     }),
//     [GET_USERS_SUCCESS] : (state, action) =>({
//         ...state,
//         loading:{
//             ...state.loading,
//             GET_USERS:false
//         },
//         users:action.payload
//     }),
//     [GET_USERS_FAILURE]:(state, action) =>({
//         ...state,
//         loading:{
//             ...state.loading,
//             GET_USERS:false 
//         }
//     })
// },
//     initialState
// );

// export default sample;