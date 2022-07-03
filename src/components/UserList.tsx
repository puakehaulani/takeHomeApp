import React from 'react';
import {UserListItem} from './UserListItem';

export const UserList = (props: {props: any}) => {
  const userData = props.props;
  const renderList = userData?.map(user => (
    <UserListItem user={user} key={user.id} />
  ));
  return renderList;
};
