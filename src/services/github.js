const sortByLogin = (itemA, itemB) => {
  if (itemA.login.toLowerCase() > itemB.login.toLowerCase()) {
    return 1;
  } else if (itemA.login.toLowerCase() < itemB.login.toLowerCase()) {
    return -1;
  } else {
    return 0;
  }
};

export const getUsers = async name => {
  // TODO: add some error handling, defaults, shared fetching function...
  const result = await fetch(`https://api.github.com/search/users?q=${name}`);
  const resultAsJson = await result.json();
  const items = [...resultAsJson.items];
  items.sort(sortByLogin);
  return items;
};
