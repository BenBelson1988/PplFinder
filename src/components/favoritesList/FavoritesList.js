import React, { useEffect, useState } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";

const FavoritesList = ({ users, addUser }) => {
  const [hoveredUserId, setHoveredUserId] = useState();
  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };
  if (users.length === 0)
    return (
      <Text size="30px" bold>
        There are no favorites yet.
      </Text>
    );
  else
    return (
      users && (
        <S.UserList>
          <S.List>
            {users.map((user, index) => {
              return (
                <S.User
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <S.UserPicture src={user?.picture.large} alt="" />
                  <S.UserInfo>
                    <Text size="22px" bold>
                      {user?.name.title} {user?.name.first} {user?.name.last}
                    </Text>
                    <Text size="14px">{user?.email}</Text>
                    <Text size="14px">
                      {user?.location.street.number} {user?.location.street.name}
                    </Text>
                    <Text size="14px">
                      {user?.location.city} {user?.location.country}
                    </Text>
                  </S.UserInfo>
                  <S.IconButtonWrapper onClick={() => addUser(user)} isVisible={true}>
                    <IconButton>
                      <FavoriteIcon color="error" />
                    </IconButton>
                  </S.IconButtonWrapper>
                </S.User>
              );
            })}
          </S.List>
        </S.UserList>
      )
    );
};

export default FavoritesList;
