import ReactQuill from "react-quill";
import { FC } from "react";
import { NoteCardProps } from "../interface/interface.ts";

export const NoteCard: FC<NoteCardProps> = ({ id, content, onDelete }) => {
  return (
    <div className="card">
      <ReactQuill
        value={content}
        readOnly
        theme="snow"
        modules={{ toolbar: false }}
      />
      <button className="close-btn" onClick={() => onDelete(id)}>
        ⨯
      </button>
    </div>
  );
};
