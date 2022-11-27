import React, { createContext, useState } from "react";
import { useTodos, useTitles, useFilterTodos } from "../hooks";
const TodoContext = createContext()

const TodoContextProvider = ({children}) => {
  const defaultTitle = 'сегодня';
  const [selectedTitle, setSelectedTitle] = useState(defaultTitle)
  
  const todos = useTodos()
  const titles = useTitles(todos)
  const filteredTodos = useFilterTodos(todos, selectedTitle)
  return (
    <TodoContext.Provider
    value={{
      selectedTitle,
      setSelectedTitle,
      todos: filteredTodos,
      titles,
    }}
    >
    {children}
    </TodoContext.Provider>
  )
}

export {TodoContext, TodoContextProvider}
