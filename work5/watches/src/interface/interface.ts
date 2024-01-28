export interface WatchData {
  id: string;
  name: string;
  timezone: number;
}

export interface WatchProps extends WatchData {
  onDelete: (id: string) => void;
}
