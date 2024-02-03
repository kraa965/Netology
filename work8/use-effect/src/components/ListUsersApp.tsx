import { FC, useState } from 'react';
import Details from './Details.tsx';
import List from './List.tsx';
import { User } from '../interface/interface.ts';
import './ListUsersApp.css';

const ListUsersApp: FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleSelectUser = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <div className="container-app">
      <List onSelectUser={handleSelectUser} />
      <Details info={selectedUser} />
    </div>
  );
};

export default ListUsersApp;
