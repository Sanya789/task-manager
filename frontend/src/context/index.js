import React, { createContext, useState } from "react";
import { useTodos, useTitles, useFilterTodos, useTitlesWithStats } from "../hooks";
const TodoContext = createContext()

const TodoContextProvider = ({children}) => {
  const defaultTitle = 'сегодня';
  const [selectedTitle, setSelectedTitle] = useState(defaultTitle)
  const [selectedTodo, setSelectedTodo] = useState(undefined)

  const todos = useTodos()
  const titles = useTitles()
  const titlesWithStats = useTitlesWithStats(titles, todos)
  const filteredTodos = useFilterTodos(todos, selectedTitle)
  return (
    <TodoContext.Provider
    value={{
      defaultTitle,
      selectedTitle,
      setSelectedTitle,
      todos: filteredTodos,
      titles: titlesWithStats,
      selectedTodo,
      setSelectedTodo
    }}
    >
    {children}
    </TodoContext.Provider>
  )
}

export {TodoContext, TodoContextProvider}
