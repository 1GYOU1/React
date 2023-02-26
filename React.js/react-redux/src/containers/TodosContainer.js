//2023-02-26
import React from 'react';
import { useSelector } from 'react-redux';
import Todos from '../components/Todos';
import { useActions } from '../lib/useActions';
import { changeInput, insert, toggle, remove }from '../modules/todos';

const TodosContainer = () =>{
    const {input, todos} = useSelector(({todos}) => ({
        input: todos.input,
        todos: todos.todos
    }));

    const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
        [changeInput, insert, toggle, remove],//useActions의 actions부분
        []//useActions의 deps부분 = [dispatch]와 같다.
    )
    return (
        <Todos input={input} todos={todos} onChangeInput={onChangeInput} onInsert={onInsert} onToggle={onToggle} onRemove={onRemove} />
    )
};
export default React.memo(TodosContainer);
//--------------------------------------------------------

//2023-02-19
// import { connect } from 'react-redux';
// import Todos from '../components/Todos';
// import { changeInput, insert, toggle, remove } from '../modules/todos'

// const TodosContainer = ({
//     input,
//     todos,
//     changeInput,
//     insert,
//     toggle,
//     remove
// }) => {
//     return (
//         <Todos input={input} todos={todos} onChangeInput={changeInput} onInsert={insert} onToggle={toggle} onRemove={remove} />
//     );
// };

// export default connect(
//     ({todos}) => ({
//         input:todos.input,
//         todos:todos.todos
//     }),
//     {
//         changeInput,
//         insert,
//         toggle,
//         remove
//     }
// )(TodosContainer)