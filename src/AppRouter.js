import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Favorites } from "pages";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";
import { usePeopleFetch } from "hooks";
import { UseFavoritesFetch } from "hooks/useFavoritesFetch";

const AppRouter = () => {
  const { users, isLoading } = usePeopleFetch();
  const { favoriteUsers, addUserToFavorites } = UseFavoritesFetch();
  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Home users={users} isLoading={isLoading} addUser={addUserToFavorites} />
            )}
          />
        </Switch>
        <Switch>
          <Route
            exact
            path="/home"
            component={() => (
              <Home
                users={users}
                isLoading={isLoading}
                addUser={addUserToFavorites}
                favoriteUsers={favoriteUsers}
              />
            )}
          />
        </Switch>
        <Switch>
          <Route
            exact
            path="/favorites"
            component={() => (
              <Favorites favoriteUsers={favoriteUsers} addUser={addUserToFavorites} />
            )}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
