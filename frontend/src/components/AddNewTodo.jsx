import React, { useContext, useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Modal from './Modal';
import { TodoContext } from '../context';
import { calendarItems } from '../constants';
import firebase from '../firebase';
import dayjs from 'dayjs';
import randomcolor from 'randomcolor';
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage';
import { v4 } from 'uuid';

const AddNewTodo = () => {
  const { titles, selectedTitle } = useContext(TodoContext);
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [todoTitle, setTodoTitle] = useState(selectedTitle);
  const [file, setFile] = useState(null);

  const uploadFile = () => {
    if (file === null) {
      return;
    } else {
      const storage = firebase.storage();
      const fileRef = ref(storage, `files/${file.name}`);
      uploadBytes(fileRef, file).then(() => {
        console.log('file uploaded successfully');
      });
    }
  };

  const downloadFile = (file) => {
    const fileName = file;
    console.log(fileName);
    const storage = getStorage();
    getDownloadURL(ref(storage, `files/${fileName}`))
      .then((url) => {
    console.log(fileName);
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();
    console.log(fileName);
      })
      .catch((error) => {
        // eslint-disable-next-line default-case
        switch (error.code) {
          case 'storage/object-not-found':
            // File doesn't exist
            break;
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;
          case 'storage/unknown':
            // Unknown error occurred, inspect the server response
            break;
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text && !calendarItems.includes(todoTitle)) {
      firebase
        .firestore()
        .collection('todos')
        .add({
          text: text,
          date: dayjs(day).format('MM/DD/YYYY'),
          day: dayjs(day).format('d'),
          time: dayjs(time).format('hh:mm A'),
          checked: false,
          color: randomcolor(),
          titleName: todoTitle,
          file: file.name,
        });
      setShowModal(false);
      setText('');
      setDay(new Date());
      setTime(new Date());
      setFile('');
    }
  };

  useEffect(() => {
    setTodoTitle(selectedTitle);
  }, [selectedTitle]);

  return (
    <div className="addNewTodo">
      <div className="btn">
        <button onClick={() => setShowModal(true)}>+ Новая задача</button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TodoForm
            handleSubmit={handleSubmit}
            heading="Добавить новую задачу"
            text={text}
            setText={setText}
            day={day}
            setDay={setDay}
            time={time}
            setTime={setTime}
            todoTitle={todoTitle}
            setTodoTitle={setTodoTitle}
            titles={titles}
            showButtons={true}
            setShowModal={setShowModal}
            file={file}
            setFile={setFile}
            uploadFile={uploadFile}
            downloadFile={downloadFile}
          />
        </LocalizationProvider>
      </Modal>
    </div>
  );
};

export default AddNewTodo;
