import React, { useState, useEffect } from 'react';

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
      <button onClick={() => setDisplayed("users")}>Users</button>
      <button onClick={() => setDisplayed("games")}>Games</button>
      <button onClick={() => setDisplayed("achievements")}>Achievements</button>

      <ol>
      { displayed === "users" ? users.map(user => <li key={user.name}>{user.name}</li>) :
        displayed === "games" ? games.map(game => <li key={game.name}>{game.name}</li>) :
        displayed === "achievements" ? achievements.map(achievement => <li key={achievement.title}>{achievement.title}</li>) :
        null
      }
      </ol>
    </div>
  );
}

export default App;
