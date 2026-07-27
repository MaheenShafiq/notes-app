import { useNavigate, useParams } from "react-router-dom"
import { useNotesData } from "../hooks/NotesContext";
import { useState } from "react";

export default function EditNote() {
  const { notesList, setNotesList } = useNotesData();
  const { id } = useParams();
  const editNote = notesList.find(note => note.id === id);
  const [editTitle, setEditTitle] = useState(editNote?.title ?? '');
  const [editContent, setEditContent] = useState(editNote?.content ?? '');
  const navigate = useNavigate();
  if (!editNote) {
    return (
      <div className="edit_page">
        <p>Note not found!</p>
        <button onClick={() => navigate('/notes')}>Back to Notes</button>
      </div>
    );
  }
  return (
    <div className="edit_page">
      
        <div className="edit-box" style={{ width: "800px" }}>
          Edit Title: <input width={100} value={editTitle} onChange={e => setEditTitle(e.target.value)} />
          Edit  Content: <input value={editContent} onChange={e => setEditContent(e.target.value)} />
        </div>

          <button onClick={() => {
            const newList = notesList.map(note => (note.id === id) ? { ...note, title: editTitle, content: editContent } : note)
            setNotesList(newList)
            navigate(`/detail/${id}`)
          }}>Save</button>
          
      
    </div>
  )
}

