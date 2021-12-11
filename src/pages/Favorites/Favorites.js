import React from "react";
import Text from "components/Text";
import * as S from "../Home/style";
import FavoritesList from "components/favoritesList";

const Favorites = (props) => {
  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <Text size="40px" bold>
          Favorites List
        </Text>
        <FavoritesList users={props.favoriteUsers} addUser={props.addUser} />
      </S.Content>
    </S.Home>
  );
};

export default Favorites;
