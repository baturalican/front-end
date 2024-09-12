import { useState } from "react";

export default function Player({ intialName, symbol }) {
  const [playerName, setPlayerName] = useState(intialName);

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

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
