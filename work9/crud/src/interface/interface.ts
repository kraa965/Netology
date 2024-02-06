export interface NoteCardProps {
  id: number;
  content: string;
  onDelete: (id: number) => void;
}

export interface NoteFormProps {
  onAdd: (content: string) => void;
}

export interface NoteProps {
  id: number;
  content: string;
}
