import produce from 'immer';
import React, { useRef, useCallback, useState } from 'react';

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });

   // input 수정을 위한 함수
   const onChange = useCallback(
    e => {
    const { name, value } = e.target;
     /*
      produce를 사용하면 spread 연산자를 사용하지 않을 수 있음. 
      setForm({
        ...form,
        [name] : [value]
      });
    */
    setForm(
      produce(draft =>{
      draft[name] = value;
    })
    );
  },
  []
  );
    

  // form 등록을 위한 함수
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username
      };

      // array 에 새 항목 등록
      /*
        setData({
          ...data,
          array: data.array.concat(info)
        });
      */
      setData(
        produce(draft =>{
        //draft로 새 항목을 만들었기 때문에 원본 수정되는 push 사용가능.
        draft.array.push(info)
        })
      );
      // form 초기화
      setForm({
        name: '',
        username: ''
      });
      nextId.current += 1;
    },
    [form.name, form.username]
  );

  // 항목을 삭제하는 함수
  const onRemove = useCallback(
    id => {
       /* 
        setData({
          ...data,
          array:data.array.filter(info => info.id !== id)
        });
      */
      setData(
        produce(draft =>{
        //클릭한 부분만 빼고 나오기
        // draft.array.filter(info => info.id !== id)
        //클릭한 부분만 제거
        //draft로 새 항목을 만들었기 때문에 원본 수정되는 splice 사용가능
        draft.array.splice(draft.array.findIndex(info=> info.id === id),1)
       })
      );
    },
    []
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map(info => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;