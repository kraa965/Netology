export interface EditPostProps {
  postId: number;
  initialContent: string;
  onCancel: () => void;
  onSave: (newContent: string) => void;
}

export interface Post {
  id: number;
  author: string;
  content: string;
  imageUrl: string;
  created: string;
}

export interface RouteParams {
  postId: string;

  [key: string]: string | undefined;
}
