import React from 'react';
import { Navigate } from 'react-router-dom';

const MyPage = () => {
    const isLoggedIn = false;// 로그인을 하지 않았다는 전제
    if(!isLoggedIn){
        return <Navigate to = '/login' replace={true} />;   
        // isLoggedIn 이 false면 login 페이지로 이동하고 현재페이지는 기록에 남기지 않는다.
        //http://localhost:3000/mypage 진입안되고 http://localhost:3000/login 페이지로 진입.
    }

    return (
        <div>마이페이지</div>
    );
};

export default MyPage;