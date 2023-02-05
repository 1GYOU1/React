import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Layout from "./Layout";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";


function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                {/* <Route path="/" element={<Home />} /> */}
                <Route index="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profiles/:username" element={<Profile />} />
            </Route>

            <Route path="/articles" element={<Articles />}>
                <Route path=":id" element={<Article />} />
                {/*
                    :id 값을 <Article /> useParams로 불러옴
                    부모와 자식 관계면 앞에 경로(ex - /articles:id) 안붙여줘도 됨.
                    5 version에는 사용 불가능. 6 version부터 가능.
                */}
            </Route>
            
            <Route path="/login" element={<Login />}></Route>
            <Route path="/mypage" element={<MyPage />}></Route>
            
            <Route path="*" element={<NotFound />}></Route>
                {/* 
                    * : 포괄 텍스트 문자. '그 외' 값을 뜻함. 일치하는 router가 없으면 여기로 일치 시켜라 라는 뜻. 주로 맨 마지막에 넣음.
                */}
        </Routes>
    );
}

export default App;