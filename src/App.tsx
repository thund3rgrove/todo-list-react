import { useState } from 'react'
import './App.css';
import TodoListContainer from './components/TodoListContainer'

function App() {
  return (
    <main style={{ width: '480px', justifySelf: 'center', justifyContent: 'center' }}>
        <TodoListContainer />
    </main>
  )
}

export default App
