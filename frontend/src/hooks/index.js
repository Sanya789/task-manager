import { useState, useEffect } from 'react';
import firebase from '../firebase';
import dayjs from 'dayjs';

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
        console.log('subscribed');
        setTodos(data);
      });
    return () => unsubscribe();
  }, []);
  return todos;
};

const useFilterTodos = (todos, selectedTitle) => {
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    let data;
    const todayDateFormated = dayjs().format('MM/DD/YYYY');
    if (selectedTitle === 'сегодня') {
      data = todos.filter((todo) => todo.date === todayDateFormated);
    } else if (selectedTitle === 'неделя') {
      data = todos.filter((todo) => {
        const todoDate = dayjs(todo.date, 'MM/DD/YYYY');
        const todayDate = dayjs(todayDateFormated, 'MM/DD/YYYY');
        const diffDays = todoDate.diff(todayDate, 'days');
        return diffDays >= 0 && diffDays < 7;
      });
    } else if (selectedTitle === 'все') {
      data = todos;
    } else {
      data = todos.filter((todo) => todo.titleName === selectedTitle);
    }
    setFilteredTodos(data);
  }, [todos, selectedTitle]);
  return filteredTodos;
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
  }, [todos]);
  return titles;
};

export { useTodos, useTitles, useFilterTodos };
