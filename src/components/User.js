import React, { useState, useCallback } from "react";
import styles from "./User.module.css";
import { getUserRepos } from "../services/github";

export const User = ({ user, ...otherProps }) => {
  const [repos, setRepos] = useState([]);
  const [expand, setExpand] = useState(false);

  const loadRepos = useCallback(async () => {
    const userReposResult = await getUserRepos(user.login);
    setRepos(userReposResult);
  }, [user]);

  const handleClick = () => {
    setExpand(!expand);
    if (!repos.length) {
      // TODO: can be much better...
      loadRepos();
    }
  };

  return (
    <>
      <div className={styles.user} onClick={handleClick}>
        <div className={styles.userLogin}>{user.login} (click to expend)</div>
        <div>
          <a
            className={styles.userReposLink}
            {...otherProps}
            href={user.repos_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Repos
          </a>
        </div>
      </div>
      {expand && (
        <div>
          {repos.map((repo, i) => (
            <div key={i}>{repo.name}</div>
          ))}
        </div>
      )}
    </>
  );
};
