//중첩된 route
import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

// const Articles = () => {

    // const activeStyle = {
    //     color:'pink',
    //     fontSize: 21
    // }
    
const Articles = () => {
    return(
        <div>
            <ul>
                <ArticleItem id={1}></ArticleItem>
                <ArticleItem id={2}></ArticleItem>
                <ArticleItem id={3}></ArticleItem>
            </ul>
            <Outlet />
        </div>
    )
}

const ArticleItem = ({id}) => {

    const activeStyle = {
        color:'lightblue',
        fontSize: 21
    }

    return (
        <div>
            {/* <Outlet />   */}
            {/*
                <Outlet />
                Route children(자식요소)에 해당하는 엘리먼트를 의미 
                App.js의 해당 부분 <Route path=":id" element={<Article />} />
            */}
            <ul>
                            {/*주소의 파라미터 값*/}
                {/* <li><Link to ="/articles/0">게시글0</Link></li> */}

                {/* <li><NavLink to ="/articles/1" style={({isActive}) => (isActive ? activeStyle : undefined)}>게시글1</NavLink></li>
                <li><NavLink to ="/articles/2" style={({isActive}) => (isActive ? activeStyle : undefined)}>게시글2</NavLink></li>
                <li><NavLink to ="/articles/3" style={({isActive}) => (isActive ? activeStyle : undefined)}>게시글3</NavLink></li> */}

                <li><NavLink to={`/articles/${id}`} style={({isActive}) => (isActive ? activeStyle : undefined)}>게시글 {id}</NavLink></li>
            </ul>
        </div>
    );
};
// };

export default Articles;