import React from 'react';
import './newUser.css';

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Ajout d'utilisateur</h1>
      <from className="newUsrFrom">
        <div className="newUserItem">
          <label>Nom</label>
          <input type="text" className="newUserInput" />
        </div>
        <div className="newUserItem">
          <label>Matricule</label>
          <input type="number" className="newUserInput" />
        </div>
        <div className="newUserItem">
          <label>Matricule</label>
          <input type="number" className="newUserInput" />
        </div>
        <div className="newUserItem">
          <label>Prénom</label>
          <input type="text" className="newUserInput" />
        </div>
        <div className="newUserItem">
          <label>Date de création</label>
          <input type="date" className="newUserInput" />
        </div>
        <div className="newUserItem">
          <button className="newUserButton">Create</button>
        </div>
        <div className="newUserItem">
          <label>Etat</label>
          <input type="text" className="newUserInput" />
        </div>
      </from>
    </div>
  );
};

export default NewUser;
