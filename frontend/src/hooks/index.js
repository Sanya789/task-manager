import { useState, useEffect } from 'react';
import firebase from '../firebase';

const useTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection('todos')
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setTodos(data);
      });
    return () => unsubscribe();
  });
  return todos;
};

const useTitles = (todos) => {
  const [titles, setTitles] = useState([]);

  function calculateNumOfTodos(titleName, todos) {
    return todos.filter((todo) => todo.titleName === titleName).length;
  }

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection('titles')
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          const titleName = doc.data().name;
          return {
            id: doc.id,
            name: titleName,
            numberOfTodos: calculateNumOfTodos(titleName, todos),
          };
        });
        setTitles(data);
      });
    return () => unsubscribe();
  });
  return titles;
};

export {useTodos, useTitles}
