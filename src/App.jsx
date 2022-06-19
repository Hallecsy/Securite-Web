import { useState, useEffect } from 'react';
import './App.css';
import Connexion from './components/Connexion';
import ShowTodos from './components/ShowTodos';

export const App = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user !== null) {
      setIsConnected(true);
    }
  }, []);

  return (
    <div className="p-10 my-10 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-3xl sm:mx-auto sm:rounded-lg">

      {isConnected
        ? <ShowTodos setIsConnected={setIsConnected} />
        : <Connexion setIsConnected={setIsConnected} />}

    </div>
  );
};
