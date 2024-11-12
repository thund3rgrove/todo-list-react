import React, { useEffect, useState } from 'react'
import TodoListItem, { ITodoListItem } from './TodoListItem';

export interface Section {
    sectionId: string;
    title: string,
    items: ITodoListItem[]
}

export default function TodoListSection({ elements, title, callbacks }: { elements: ITodoListItem[] | null, title: string, callbacks: Object }) {
    
    const [elementsComplete, setElementsComplete] = useState<number>(0);

    useEffect(() => {
        console.log('updated section')
        setElementsComplete(elements?.filter(e => e.isComplete).length || 0);
    }, [elements])
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid teal', borderRadius: '5px', marginBottom: '5%', padding: '2%' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2%' }}>
                <h2>{title}</h2>
                <span>{elementsComplete}/{elements?.length} completed</span>
            </div>
            {!elements && <div>Тут пока пусто</div>}

            {elements?.map((e, i) =>
                <TodoListItem key={i} element={e} callbacks={callbacks}/>
            )}
            
            <button style={{ width: '100%' }}>Add new todo</button>
        </div>
    )
}
