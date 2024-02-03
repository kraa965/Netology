import { FC, useEffect, useState } from 'react';
import { ListProps, User } from '../interface/interface.ts';

const List: FC<ListProps> = ({ onSelectUser }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  useEffect(() => {
    // Загрузка пользователей
    fetch(
      'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'
    )
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSelectUser = (user: User) => {
    onSelectUser(user);
    setSelectedUserId(user.id);
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => handleSelectUser(user)}
            className={selectedUserId === user.id ? 'selected-user' : ''}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
