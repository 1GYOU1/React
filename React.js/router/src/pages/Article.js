import React from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {
    const {id} = useParams();//파라미터값을 id로 받아옴
    return (
        <div>
            <h2>게시글 {id}</h2>
        </div>
    );
};

export default Article;