import { MdAdd } from 'react-icons/md';
//아이콘 링크 https://react-icons.github.io/react-icons/icons?name=md
import './TodoInsert.scss';

const TodoInsert = () => {
    return (
        <form className="TodoInsert">
            <input placeholder="할 일을 입력하세요" />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;
