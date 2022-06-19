import { useState, useEffect } from 'react';
import '../App.css';
import uuid from 'react-native-uuid';
import axios from 'axios';
import '../index.css';
import Loading from './Loading';
import Form from './Form';
import List from './List';

const ShowTodos = ({ setIsConnected }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setIsLoading(true);
    axios.get('http://localhost:5000/api/todos')
      .then((res) => {
        setTasks(res.data);
        setIsLoading(false);
      })
      .catch(() => {
        setErrorMessage('Impossible de récupérer la liste des tâches');
        setIsLoading(false);
      });
  }, []);

  const [newTask, setNewTask] = useState({
    uuid: uuid.v4(), titre: '', description: '', priorite: 1, date: new Date().toISOString().split('T')[0]
  });
  const [isEditing, setIsEditing] = useState(false);

  const changeSelectedIndex = (selectValue) => {
    document.querySelector('#priorite-select').value = selectValue;
  };

  const onDisconnect = () => {
    setIsConnected(false);
    localStorage.removeItem('user');
  };

  return (
    <div>
      <div className="flex justify-end">
        <input type="submit" onClick={onDisconnect} value="Se déconnecter" className="cursor-pointer px-8 py-2 mb-5 bg-gray-50 rounded-full text font-bold text-gray-900 border" />
      </div>
      <Form
        tasks={tasks}
        setTasks={setTasks}
        newTask={newTask}
        setNewTask={setNewTask}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        changeSelectedIndex={changeSelectedIndex}
      />

      {errorMessage && (
        <div className="bg-red-100 rounded-lg bg- p-5 my-3">
          <p className="font-semibold text-xl text-red-600 text-center my-2">{errorMessage}</p>
        </div>
      )}

      {isLoading ? <Loading />
        : (
          <List
            tasks={tasks}
            setTasks={setTasks}
            setNewTask={setNewTask}
            setIsEditing={setIsEditing}
            setErrorMessage={setErrorMessage}
            changeSelectedIndex={changeSelectedIndex}
          />
        )}
    </div>
  );
};

export default ShowTodos;
