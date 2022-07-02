import React from 'react';
import {Text} from 'react-native';
import {UserListItem} from './UserListItem';
import {tempData} from './tempData';

export const UserList = () => {
  console.log(tempData);
  const renderList = tempData.map(i => <UserListItem user={i} />);
  return renderList;
};
