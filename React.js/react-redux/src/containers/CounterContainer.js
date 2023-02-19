import { connect } from 'react-redux';
import Counter from '../components/Counter';
import {decrease, increase} from '../modules/counter';

const CounterContainer = ({number, increase, decrease}) => {
    return (
        <div>
            <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
        </div>
    );
};

// 방법1
// import { bindActionCreators } from 'redux';

// const mapStateToProps = state => ({ //현재 store가 지니고 있는 상태를 가르킨다.
//     number:state.counter.number,
// })
// const mapDispatchToProps = dispatch => ({
//     increase:() => {
//         dispatch(increase());
//     },
//     decrease:() => {
//         dispatch(decrease());
//     },
// })
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(CounterContainer);

// 방법2
// import { bindActionCreators } from 'redux';

// export default connect(
//     state => ({
//         number:state.counter.number,
//     }),
//     dispatch =>
//     bindActionCreators(
//         {
//             increase,
//             decrease
//         },
//         dispatch
//     )
// )(CounterContainer);

// 방법3
export default connect(
    state => ({
        number:state.counter.number,
    }),
        {
            increase,
            decrease
        }
)(CounterContainer);
