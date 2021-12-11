import React, { useEffect, useState } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";

const UserList = ({ users, isLoading, addUser, favoriteUsers }) => {
  const [hoveredUserId, setHoveredUserId] = useState();
  const [countryList, setCountryList] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  useEffect(() => {
    filterUsers();
  }, [isLoading, countryList, users]);

  const filterUsers = () => {
    if (countryList.length === 0) {
      setFilteredUsers(users);
      return;
    }
    setFilteredUsers(
      users.filter((user) => {
        for (var i = 0; i < countryList.length; i++)
          if (user.location.country === countryList[i]) return user;
      })
    );
  };

  const filterCountry = (clicked, country) => {
    clicked
      ? setCountryList([...countryList, country])
      : setCountryList(
          countryList.filter((countryfilter) => {
            return country !== countryfilter;
          })
        );
  };

  return (
    <S.UserList>
      <S.Filters>
        <CheckBox
          value="BR"
          label="Brazil"
          onChange={(e) => filterCountry(e, "Brazil")}
        />
        <CheckBox
          value="UK"
          label="United Kingdom"
          onChange={(e) => filterCountry(e, "United Kingdom")}
        />
        <CheckBox
          value="AU"
          label="Australia"
          onChange={(e) => filterCountry(e, "Australia")}
        />
        <CheckBox
          value="CA"
          label="Canada"
          onChange={(e) => filterCountry(e, "Canada")}
        />
        <CheckBox
          value="FR"
          label="France"
          onChange={(e) => filterCountry(e, "France")}
        />
        <CheckBox
          value="DE"
          label="Germany"
          onChange={(e) => filterCountry(e, "Germany")}
        />
      </S.Filters>
      <S.List>
        {filteredUsers.map((user, index) => {
          let favorite = false;
          for (var i = 0; i < favoriteUsers.length; i++) {
            if (user.login.uuid === favoriteUsers[i].login.uuid) {
              favorite = true;
              break;
            }
          }
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
              <S.IconButtonWrapper
                onClick={() => addUser(user)}
                isVisible={index === hoveredUserId || favorite}
              >
                <IconButton>
                  <FavoriteIcon color="error" />
                </IconButton>
              </S.IconButtonWrapper>
            </S.User>
          );
        })}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
