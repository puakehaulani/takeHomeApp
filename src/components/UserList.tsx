import React from 'react';
import {Text} from 'react-native';
import {UserListItem} from './UserListItem';

export const UserList = props => {
  const userData = props.props;
  const renderList = userData?.map(user => (
    <UserListItem user={user} key={user.id} />
  ));
  return renderList;
};
