export interface User {
  id: number;
  name: string;
}

export interface UserDetails {
  id: number;
  name: string;
  avatar: string;
  details: {
    city: string;
    company: string;
    position: string;
  };
}

export interface DetailsProps {
  info: User | null;
}

export interface ListProps {
  onSelectUser: (user: User) => void;
}
