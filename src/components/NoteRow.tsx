
import { useNavigate } from 'react-router-dom';
import { type Note } from '../data/notesData'
import React from 'react';
import { useNotesData } from '../hooks/NotesContext';

type NoteProp = {
  note:Note,
  onDelete: (id:string) => void
  onEdit: (id:string) => void
}

export default React.memo(function NoteRow({note, onDelete }:NoteProp) {
  const navigate = useNavigate();
  const {onEdit} = useNotesData();
  return (
    <div className="note-row" onClick={() => navigate(`/detail/${note.id}`)}>
      <div className="note-main">
        <div className="note-header">
          <h4 className="note-title">{note.title}</h4>
          <span className="note-date">{note.createdAt}</span>
        </div>
        <p className="note-content">{note.content}</p>
      </div>
    
      <div className="note-actions">
        {onEdit && (
          <button
            className="btn btn-edit"
            onClick={() => onEdit(note.id)}
            title="Edit note"
          >
            Edit
          </button>
        )}
        {onDelete && (
          <button
            className="btn btn-delete"
            onClick={(e) => {
              e.stopPropagation()
              onDelete(note.id)
            }}
            title="Delete note" 
          >
            Delete
          </button>
        )}
      </div> 
    </div>
  )
})
