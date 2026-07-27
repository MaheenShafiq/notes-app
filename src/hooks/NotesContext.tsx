import { useNavigate } from "react-router-dom";
import { dummyNotes, type Note } from "../data/notesData";
import { useContext, createContext, useState, type ReactNode, useEffect, useCallback } from "react";

interface NotesContextType {
    notesList: Note[];
    setNotesList: React.Dispatch<React.SetStateAction<Note[]>>;
    onEdit: (id:string) => void
}

const NotesContext = createContext<NotesContextType | null>(null);

export default function NotesProvider({ children }: { children: ReactNode }) {
    const navigate = useNavigate();


    const [notesList, setNotesList] = useState<Note[]>(() => {
        try {
            const storedNotes = localStorage.getItem('notes');
            const notesData = storedNotes ? JSON.parse(storedNotes) : dummyNotes
            return Array.isArray(notesData) ? notesData : dummyNotes
        }
        catch {
            return dummyNotes
        }
    });

      const onEdit = useCallback((id: string) => {
        navigate(`/note/${id}`)
      }, [navigate])

    const notesData: NotesContextType = { notesList, setNotesList, onEdit }

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notesList))
    }, [notesList])

    return <NotesContext.Provider value={notesData}>{children}</NotesContext.Provider>
};


export function useNotesData() {
    const context = useContext(NotesContext);
    if (!context) {
        throw new Error('useNotesData must be used inside a NotesProvider');
    }
    return context;
}

