import { useEffect, useState } from "react";

export const UseFavoritesFetch = () => {
  const [favoriteUsers, setFavoriteUsers] = useState([]);
  const [firstRender, setFirstRender] = useState(0);
  if (JSON.parse(localStorage.getItem("favoriteUsers")) !== null && !firstRender) {
    setFavoriteUsers(JSON.parse(localStorage.getItem("favoriteUsers")));
    setFirstRender(1);
  }
  localStorage.setItem("favoriteUsers", JSON.stringify(favoriteUsers));

  function addUserToFavorites(user) {
    if (favoriteUsers.length === 0) {
      setFavoriteUsers([...favoriteUsers, user]);
      localStorage.setItem("favoriteUsers", JSON.stringify([user]));
      return;
    }

    if (userExist(user)) {
      setFavoriteUsers(
        favoriteUsers.filter((userFavorite) => {
          return userFavorite.login.uuid !== user.login.uuid;
        })
      );
      if (favoriteUsers.length === 1) localStorage.clear();
      else
        localStorage.setItem(
          "favoriteUsers",
          JSON.stringify(
            favoriteUsers.filter((userFavorite) => {
              return userFavorite.login.uuid !== user.login.uuid;
            })
          )
        );
    } else {
      setFavoriteUsers([...favoriteUsers, user]);
    }
  }

  function userExist(user) {
    for (var i = 0; i < favoriteUsers.length; i++)
      if (favoriteUsers[i].login.uuid === user.login.uuid) return true;
    return false;
  }

  return { favoriteUsers, addUserToFavorites };
};

export default UseFavoritesFetch;
