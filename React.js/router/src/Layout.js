import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);//이전 페이지로 이동
    };

    const goArticles = () => {
        navigate('/articles', {replace : true});
        /*
            articles 경로로 이동,
            {replace : true} -> button을 눌렀을때 현재 진입한 페이지의 히스토리 기록이 안남음. (/articles 페이지 아님 !!!)
            예를들면 구매페이지에서 장바구니에 물건을 담았을때, 이전버튼을 2번 클릭해야 메인페이지로 돌아갈 수 있는 경우에 주로 사용.
        */
    };

    return (
        <div>
            <header style={{background:'lightgray', padding:16, fontSize:24}}>
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goArticles}>게시글 목록</button>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;