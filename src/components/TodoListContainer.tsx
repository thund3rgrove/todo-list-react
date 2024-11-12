import React, { useEffect, useState } from 'react'
import TodoListSection from './TodoListSection.tsx'
import useTodoList from '../hooks/useTodoList.ts'


export default function TodoListContainer() {
    const [sections, , , updateListItem] = useTodoList();

    useEffect(() => {
        console.log('updated container');
    }, [sections]); // Add `sections` to dependencies
    
    return (
        <div>
            {/* button with inline styles that shows big plus to add new sections */}
            <button>Добавить секцию</button>

            {sections?.map((e, i) =>
                <TodoListSection key={i} title={e.title} elements={e.items} callbacks={{'updateListItem': updateListItem}}/>
            ) || <span>Пусто</span>}
        </div>
    )
}
