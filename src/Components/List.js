import React  from 'react'

const List = props => {

  const { users, games, achievements, displayed } = props

  return (
    <ol>
    { displayed === "users" ? users.map(user => <li key={user.name}>{user.name}</li>) :
      displayed === "games" ? games.map(game => <li key={game.name}>{game.name}</li>) :
      displayed === "achievements" ? achievements.map(achievement => <li key={achievement.title}>{achievement.title}</li>) :
      null
    }
    </ol>
  )
}

export default List