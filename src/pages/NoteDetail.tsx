import { useNavigate, useParams } from "react-router-dom"
import { useNotesData } from "../hooks/NotesContext";

export default function NoteDetail() {
  const navigate = useNavigate()
  const { notesList } = useNotesData();
  const { id } = useParams();

  const note = notesList.find(note => note.id === id);

  if (!note) {
    return (
      <div className="note_detail">
        <p>Note not found!</p>
        <button onClick={() => navigate('/notes')}>Back to Notes</button>
      </div>
    );
  }

  return (
    <div className="note_detail">
      <div className="title">{note.title}</div>
      <div className="content">{note.content}</div>
      <div className="action-btn"></div>
      <button onClick={() => navigate('/notes')}>Back </button>
        <button className="edit-button margin-top"
          onClick={() => navigate(`/note/${id}`)}
          title="Edit note"
        >
          Edit
        </button>

    </div>
  )
}