//rcc tab

import React, { Component } from 'react';

class RefSample extends Component {
    input = React.createRef();

    handleFocus = () => {
        this.input.current.focus();
        //this.input.current 사용해줘야함.
    };

    render() {
        return (
            <div>
                <input ref={this.input} />
            </div>
        );
    }
}

export default RefSample;
