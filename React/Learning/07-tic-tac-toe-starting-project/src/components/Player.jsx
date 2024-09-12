import { useState } from "react";

export default function Player({ name, symbol }) {
  // false is the initial state
  // isEditing is the state variable
  // setIsEditing is the function to change the isEditing value
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // VERY IMPORTANT NOTE HERE!!!
    // We CANNOT write the below line like this:
    // setIsEditing(!isEditing);
    // Because if we do that, React schedules the update of the variable (isEditing)
    // It does not change it immediately!!!
    setIsEditing((editing) => !editing);
  
  }

  let playerName =  <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = <input type="text" required value={name}/>
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
