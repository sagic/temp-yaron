import React, { useEffect, useState, useCallback } from "react";
import { getUsers } from "../services/github";
import { LetterButton } from "./LetterButton";
import { UsersList } from "./UsersList";

export const Users = ({ name }) => {
  const [usersMap, setUsersMap] = useState({});

  const loadUsers = useCallback(async () => {
    const usersResult = await getUsers(name);
    const map = usersResult.reduce((acc, user) => {
      const firstLetter = user.login[0].toLowerCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(user);
      return acc;
    }, {});
    setUsersMap(map);
  }, [name]);

  useEffect(() => {
    loadUsers();
    return () => {
      // TODO: replace simple fetch with hook and allow cancelation
    };
  }, [loadUsers]);

  const letters = Object.keys(usersMap);

  return (
    <div>
      {letters.map(letter => (
        <UsersList key={letter} users={usersMap[letter]} letter={letter} />
      ))}
    </div>
  );
};
