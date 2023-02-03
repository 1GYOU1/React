//to do list practice
import { useState } from "react";

function ToDoListpartOne() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);//기본값은 비어있는 배열
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();//form은 submit 이벤트를 갖고 있기 때문에 evernt.preventDefault() 함수를 이용하여 기본 동작을 막자.
        if (toDo === "") {
        return;//toDo가 비어있으면 함수가 작동하지않도록 return
        }
        setToDos((currentArray) => [toDo, ...currentArray]);
        //현재의 state가 들어간 새로운 array를 리턴해주는 역할을 한다. 즉 이 array에는 todo와 이전의 toDos를 가지게 됨
        setToDo("");
        //마지막에 setToDo("")을 통해 button을 누르면 toDo(input)를 빈칸으로 만들도록한다.
    };
    return (
        <div>
        <h1>My To Dos ({toDos.length})</h1>
        <form onSubmit={onSubmit}>
            <input
            onChange={onChange}
            value={toDo}
            type="text"
            placeholder="Write your to do..."
            />
            <button>Add To Do</button>
        </form>
        </div>
    );
}

export default ToDoListpartOne;