import React, {useState, useEffect} from 'react'
import styles from './TodoListItem.module.css'
import useTodoList from '../hooks/useTodoList';

export interface ITodoListItem {
    itemId: string;
    name: string,
    isComplete: boolean;
}

export default function TodoListElement({ element, callbacks }: {element: ITodoListItem, callbacks: Object}) {
    const [isComplete, setIsComplete] = useState<boolean>(false)

    useEffect(() => {
        setIsComplete(element.isComplete);
    }, [])

    function handleCompleteChange(e) {
        callbacks.updateListItem(element.itemId, { isComplete: !isComplete });
        setIsComplete(v => !v)
    }

    return (
        <div className={styles.element__wrapper} onClick={handleCompleteChange}>
            {/* <input type="checkbox" name="" id="" checked={isComplete} onChange={() => {}}/> */}
            {/* <svg width="30px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z" style={{ background: '#ffffff' }}/></svg> */}
            {/* <span style={{width:"30px", height:"30px", justifySelf: 'flex-start'}}>icon</span> */}
            <span style={isComplete ? { textDecoration: 'line-through' } : {}} className={isComplete ? 'disabled_text' : ''}>{element.name}</span>
            <span>{element.isComplete}</span>
        </div>
    )
}
