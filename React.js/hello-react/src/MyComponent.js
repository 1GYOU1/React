import React from 'react';
import propTypes from 'prop-types';

//함수형
const MyComponent = ({ name, children, favoriteNumber }) => {
    return (
        <div>
            {name}의 첫 컴포넌트
            <br />
            children 값은 {children}
            <br />
            제가 좋아하는 숫자는 {favoriteNumber} 입니다.
        </div>
    );
};

//객체
MyComponent.propTypes = {
    name: propTypes.string,
    favoriteNumber: propTypes.number.isRequired,
};

MyComponent.defaultProps = {
    name: '기본이름',
};

export default MyComponent;
