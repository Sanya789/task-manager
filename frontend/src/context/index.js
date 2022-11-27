import React, { createContext, useState } from "react";
import { useTodos, useTitles } from "../hooks";
const TodoContext = createContext()

const TodoContextProvider = ({children}) => {
  const defaultTitle = 'сегодня';
  const [selectedTitle, setSelectedTitle] = useState(defaultTitle)
  
  const todos = useTodos()
  const titles = useTitles(todos)
  return (
    <TodoContext.Provider
    value={{
      selectedTitle,
      setSelectedTitle,
      todos,
      titles
    }}
    >
    {children}
    </TodoContext.Provider>
  )
}

export {TodoContext, TodoContextProvider}
