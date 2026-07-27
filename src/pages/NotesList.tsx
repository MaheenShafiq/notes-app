import { useCallback, useMemo, useState } from 'react';

import NoteRow from '../components/NoteRow';
import SearchNote from '../components/SearchNote';
import { useNavigate } from 'react-router-dom';
import { useNotesData } from '../hooks/NotesContext';
import ErrorBoundary from '../components/ErrorBoundary';

export default function NotesList() {
  const { notesList, setNotesList, onEdit } = useNotesData();
  const [text, setText] = useState('');
  const navigate = useNavigate();


  const onDelete = useCallback((id: string) => {
    setNotesList(prev => prev.filter(note => (note.id !== id)))
  }, [])


  const filterList = useMemo(() => {
    if (!text.trim()) return notesList;
    return notesList.filter(note => (note.title.trim().toLocaleLowerCase()).includes(text.trim().toLocaleLowerCase()));
  }, [text, notesList])

  return (
    <div className='notes_list'>
      <div className='filter_box'>
        <SearchNote setText={setText} />
        <button onClick={() => navigate('/create')}>Create Note</button>
      </div>
      {
        (filterList.length === 0 && text.trim()) && 
        <div>No results found</div>
      }
      {
        filterList.length === 0 && !text.trim() && <h3>List is empty create one</h3>
      }
      <ErrorBoundary fallback={<div>Coundn't load your notes</div>} >
        {filterList.map(note => (
          <NoteRow key={note.id} note={note} onEdit={onEdit} onDelete={onDelete} />
        ))
        }
      </ErrorBoundary>
    </div>
  )
}

