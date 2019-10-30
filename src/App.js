// import React from 'react';
import React, { useState, useEffect } from 'react';
import './App.css';
import List from './List';
import Details from './Details';

function App() {
  const [list, setList] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    fetch(' https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
      .then(res => res.json())
      .then(data => setList(data));
  }, [])

  let setUserId = (id) => setId(id)

  return (
    <div className="App">
      <List profiles={list} setUserId={setUserId} />
      {id && <Details id={id} />}
    </div>
  );
}

export default App;
