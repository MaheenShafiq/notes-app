import { useState } from 'react'
import { useNotesData } from '../hooks/NotesContext'
import { useNavigate } from 'react-router-dom';

export default function CreateNote() {
  const { notesList,setNotesList } = useNotesData();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const formatDate = new Date().toISOString();
  const navigate = useNavigate();
  function handleCreate() {
    setNotesList([
        ...notesList,
        {
        id: String(crypto.randomUUID()),
        title: title,
        content: content,
        createdAt:  String(formatDate)
      }
    ])
    navigate('/notes')
}

return (
  <div className="add_note">
    <input type="text" className="note_title" placeholder='title' value={title} onChange={e => setTitle(e.target.value)} />
    <input type="text" className='content' placeholder='content' value={content} onChange={e => setContent(e.target.value)} />
    <button onClick={handleCreate}>Add</button>
  </div>
)
}
