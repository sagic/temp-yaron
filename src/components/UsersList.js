import React, { useState } from "react";
import { LetterButton } from "./LetterButton";

export const UsersList = ({ letter, users }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <LetterButton letter={letter} onClick={handleClick} />
      {expanded && (
        <div>
          {(users || []).map(user => (
            <div key={user.id}>{user.login}</div>
          ))}
        </div>
      )}
    </>
  );
};
