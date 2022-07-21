import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
  const [value, setValue] = useState('');
  const onChange = useCallback((e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  }, []);
  return (
    <>
      <form className="TodoInsert">
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={value}
          onChange={onChange}
        />
        <button type="submit">
          <MdAdd></MdAdd>
        </button>
      </form>
    </>
  );
};

export default TodoInsert;
// import {} from 'react-icons/md';
