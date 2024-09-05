import { useState } from "react";

export default function Player({ name, symbol }) {
  // false is the initial state
  // isEditing is the state variable
  // setIsEditing is the function to change the isEditing value
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(true);
  }

  let playerName =  <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = <input type="text" required/>
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}
