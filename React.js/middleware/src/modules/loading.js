import { createAction, handleActions } from "redux-actions";

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = createAction(
    START_LOADING,
    requestType => requestType  // // payload:'sample/GET_POST 또는 GET_USERS 등...'와 같은 의미.
);

export const finishLoading = createAction(
    FINISH_LOADING,
    requestType => requestType 
);

const initialState = {};
/*
react.js\middleware\src\modules\sample.js

const initialState = {};
[GET_POST_SUCCESS] : (state, action) =>({
    ...state,
    loading:{
        ...state.loading,
        GET_POST:false
    },
    post:action.payload
}),
해당 부분을 리펙토링한 소스↓↓
*/
const loading = handleActions(
    {
        [START_LOADING]: (state, action) =>({
            ...state,
            [action.payload]:true
        }),
        [FINISH_LOADING]: (state,action) =>({
            ...state,
            [action.payload]:false
        })
    },
    initialState
)

export default loading