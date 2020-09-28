import React, { useState, useEffect } from 'react';
import List from './Components/List'

function App() {

  let [users, setUsers] = useState([])
  let [games, setGames] = useState([])
  let [achievements, setAchievements] = useState([])
  let [displayed, setDisplayed] = useState("")

  useEffect(() => {
    fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(data => setUsers(data))
    
    fetch('http://localhost:3000/games')
    .then(resp => resp.json())
    .then(data => setGames(data))

    fetch('http://localhost:3000/achievements')
    .then(resp => resp.json())
    .then(data => setAchievements(data))

  }, [])

  return (
    <div>
      <h1>Click a button to see some stuff:</h1>
      <button onClick={() => setDisplayed("users")}>Users</button>
      <button onClick={() => setDisplayed("games")}>Games</button>
      <button onClick={() => setDisplayed("achievements")}>Achievements</button>

      <List users={users} games={games} achievements={achievements} displayed={displayed} />

    </div>
  );
}

export default App;
