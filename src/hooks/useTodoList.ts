import { useState, useEffect } from "react";
import { ITodoListItem } from '../components/TodoListItem.tsx'
import { Section } from '../components/TodoListSection.tsx'

const useTodoList = () => {
    const [sections, setSections] = useState<Section[]>([]);

    useEffect(() => {
        setSections([
            {
                sectionId: "1",
                title: 'My great section',
                items: [{
                    itemId: "1",
                    name: 'Element 1',
                    isComplete: true
                },
                {
                    itemId: "2",
                    name: 'Element 2',
                    isComplete: false
                },
                {
                    itemId: "3",
                    name: 'Element 3',
                    isComplete: false
                },
                {
                    itemId: "4",
                    name: 'Element 4',
                    isComplete: true
                }]
            },
            {
                sectionId: "2",
                title: 'My second section',
                items: [{
                    itemId: "5",
                    name: 'Element 1',
                    isComplete: true
                },
                {
                    itemId: "6",
                    name: 'Element 2',
                    isComplete: true
                },
                {
                    itemId: "7",
                    name: 'Element 3',
                    isComplete: false
                },
                {
                    itemId: "8",
                    name: 'Element 4',
                    isComplete: true
                }]
            },
            {
                sectionId: "3",
                title: 'My third section',
                items: [{
                    itemId: "9",
                    name: 'Element 1',
                    isComplete: true
                },
                {
                    itemId: "10",
                    name: 'Element 2',
                    isComplete: false
                },
                {
                    itemId: "11",
                    name: 'Element 3',
                    isComplete: true
                },
                {
                    itemId: "12",
                    name: 'Element 4',
                    isComplete: false
                }]
            },
            {
                sectionId: "4",
                title: 'My fourth section',
                items: [{
                    itemId: "13",
                    name: 'Element 1',
                    isComplete: true
                },
                {
                    itemId: "14",
                    name: 'Element 2',
                    isComplete: true
                },
                {
                    itemId: "15",
                    name: 'Element 3',
                    isComplete: false
                },
                {
                    itemId: "16",
                    name: 'Element 4',
                    isComplete: true
                }]
            },
        ])
    }, [])

    function updateSection(sectionId: string) {

    }

    function updateListItem(itemId: string, updatedProperties: Partial<ITodoListItem>) {
        console.log('updating item', itemId)
        // find which section item belong
        
        // console.log(sections?.flatMap(e => e.items).find(item => item.itemId === itemId))
        
        setSections((prevSections) => 
            prevSections?.map(section => ({
                ...section,
                items: section.items.map(item =>
                    item.itemId === itemId ? { ...item, ...updatedProperties } : item
                )
            }))
        );
    
    }

    return [sections, setSections, updateSection, updateListItem]
}

export default useTodoList;