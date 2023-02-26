import { finishLoading, startLoading } from "../modules/loading";

export default function createRequestThunk(type, request) {
// 성공이나 실패 액션 타입을 정의 
//타입에 따라서 SUCCESS와 FAILURE로 나눠짐
const SUCCESS = `${type}_SUCCESS`;
 const FAILURE = `${type}_FAILURE`;

 return params => async dispatch =>{
    dispatch({type}); //시작됨
    dispatch(startLoading(type))
    try{
        const response = await request(params);
        dispatch({
            type:SUCCESS,
            payload:response.data
        });; // 성공
        dispatch(finishLoading(type))
    }catch(e){
        dispatch({
            type:FAILURE,
            payload:e,
            error:true
        });//에러발생
        dispatch(finishLoading(type))
    }
 }
}