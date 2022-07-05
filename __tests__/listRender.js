import React from 'react';
import renderer from 'react-test-renderer';
import { UserList } from '../src/components';

test('userList renders correctly', () => {
    const tree = renderer.create(<UserList />).toJSON();
    expect(tree).toMatchSnapshot();
});
