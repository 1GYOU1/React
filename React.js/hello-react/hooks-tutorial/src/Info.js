import useInputs from './useInputs';

const Info = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickname: '',
    });
    const { name, nickname } = state;

    return (
        <div>
            <div>
                <input
                    name="name"
                    value={name}
                    onChange={onChange}
                    placeholder="이름"
                />
                <br />
                <input
                    name="nickname"
                    value={nickname}
                    onChange={onChange}
                    placeholder="닉네임"
                />
            </div>
            <div>
                <div>
                    <b>이름:</b>
                    {name}
                </div>
                <div>
                    <b>닉네임:</b>
                    {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;

//-----------------------------------------------------
//useReducer 사용
// import { useReducer } from 'react';

// function reducer(state, action) {
//     return {
//         ...state,
//         [action.name]: action.value,
//     };
// }

// const Info = () => {
//     const [state, dispatch] = useReducer(reducer, {
//         name: '',
//         nickname: '',
//     });
//     const { name, nickname } = state;

//     const onChange = (e) => {
//         dispatch(e.target);
//     };
//     return (
//         <div>
//             <div>
//                 <input
//                     name="name"
//                     value={name}
//                     onChange={onChange}
//                     placeholder="이름"
//                 />
//                 <br />
//                 <input
//                     name="nickname"
//                     value={nickname}
//                     onChange={onChange}
//                     placeholder="닉네임"
//                 />
//             </div>
//             <div>
//                 <div>
//                     <b>이름:</b>
//                     {name}
//                 </div>
//                 <div>
//                     <b>닉네임:</b>
//                     {nickname}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Info;

//----------------------------------------------------------------
//useState 사용
// import React, { useEffect, useState } from 'react';

// const Info = () => {
//     const [name, setName] = useState('');
//     const [nickname, setNickname] = useState('');

//     useEffect(() => {
//         //생명주기 체크
//         console.log('effect'); //mount(업데이트) 될때
//         return () => {
//             //unmount 될때(제거, 업데이트 되기 전에)
//             console.log('cleanup');
//             console.log(name);
//         };
//     }, [name]);

//     const onChangeName = (e) => {
//         setName(e.target.value);
//     };
//     const onChangeNickname = (e) => {
//         setNickname(e.target.value);
//     };
//     return (
//         <div>
//             <div>
//                 <input
//                     value={name}
//                     onChange={onChangeName}
//                     placeholder="이름"
//                 />
//                 <br />
//                 <input
//                     value={nickname}
//                     onChange={onChangeNickname}
//                     placeholder="닉네임"
//                 />
//             </div>
//             <div>
//                 <div>
//                     <b>이름:</b>
//                     {name}
//                 </div>
//                 <div>
//                     <b>닉네임:</b>
//                     {nickname}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Info;
