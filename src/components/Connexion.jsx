import '../App.css';
import axios from 'axios';
import { useState } from 'react';

const Connexion = ({ setIsConnected }) => {
  const [login, setLogin] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get('http://localhost:5000/api/login', {
      email: login.username,
      password: login.password
    }).then((response) => {
      if (response.status === 200) {
        setIsConnected(true);
        localStorage.setItem('user', JSON.stringify(response.data));
      }
    })
      .catch(() => {
      });
  };

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-800 rounded-lg p-5 text-white">
      <h2 className="text-center font-bold text-2xl">Connexion</h2>
      <form method="POST" className="pt-5 pb-5" onSubmit={handleSubmit}>
        <div className="py-2 flex justify-center">
          <input id="titreTask" type="text" name="username" placeholder="Email" onChange={handleChange} className="w-1/2 shadow appearance-none border rounded py-1 px-3 ml-2 text-grey-darker text-gray-900" />
        </div>
        <div className="py-2 flex justify-center">
          <input id="descriptionTask" type="password" name="password" placeholder="Mot de passe" onChange={handleChange} className="w-1/2 shadow appearance-none border rounded py-1 px-3 ml-2 text-grey-darker text-gray-900" />
        </div>
        <br />
        <div className="flex">
          <input type="submit" value="Se connecter" className="cursor-pointer m-auto px-8 py-2 mt-5 bg-gray-50 rounded-full text font-bold text-gray-900 border" />
        </div>
      </form>
    </div>
  );
};

export default Connexion;
