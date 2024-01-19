export type DataItem = {
  date: string;
  distance: number;
};

export type InputFormProps = {
  data: DataItem | null;
  onSubmit: (date: string, distance: number) => void;
};

export type DataTableProps = {
  data: {
    date: string;
    distance: number;
  }[];
  onDelete: (date: string) => void;
  onEdit: (date: string) => void;
};
