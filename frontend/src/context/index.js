import React, { createContext, useState } from "react";

const TodoContext = createContext()

const TodoContextProvider = ({children}) => {
  const defaultTitle = 'сегодня';
  const [selectedTitle, setSelectedTitle] = useState(defaultTitle)
  
  return (
    <TodoContext.Provider
    value={{
      selectedTitle,
      setSelectedTitle
    }}
    >
    {children}
    </TodoContext.Provider>
  )
}

export {TodoContext, TodoContextProvider}
