import React, { Component } from 'react';
import propTypes from 'prop-types';

class MyComponent_c extends Component {
    static propTypes = {
        name: propTypes.string,
        favoriteNumber: propTypes.number.isRequired,
    };

    static defaultProps = {
        name: '기본이름',
    };

    render() {
        const { name, children, favoriteNumber } = this.props;
        return (
            <div>
                {name}의 첫 컴포넌트
                <br />
                children 값은 {children}
                <br />
                제가 좋아하는 숫자는 {favoriteNumber} 입니다.
            </div>
        );
    }
}

export default MyComponent_c;
