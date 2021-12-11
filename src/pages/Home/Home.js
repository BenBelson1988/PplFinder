import React, { useState } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import * as S from "./style";

const Home = (props) => {
  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <UserList
          users={props.users}
          isLoading={props.isLoading}
          addUser={props.addUser}
          favoriteUsers={props.favoriteUsers}
        />
      </S.Content>
    </S.Home>
  );
};

export default Home;
