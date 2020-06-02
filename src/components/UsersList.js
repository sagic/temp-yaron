import React, { useState } from "react";
import { LetterButton } from "./LetterButton";
import { User } from "./User";

export const UsersList = ({ letter, users }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <LetterButton letter={letter} active={expanded} onClick={handleClick} />
      {expanded && (
        <div>
          {(users || []).map(user => (
            <User key={user.id} user={user} />
          ))}
        </div>
      )}
    </>
  );
};
