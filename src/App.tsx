import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from "./pages/Login";
import CheckUser from "./auth/CheckUser";
import { useState } from "react";
import NotesList from "./pages/NotesList";
import RedirectIfAuthed from "./auth/RedirectIfAuthed";
import EditNote from "./pages/EditNote";
import NoteDetail from "./pages/NoteDetail";
import NotesProvider from "./hooks/NotesContext";
import { lazy, Suspense } from "react";
import './App.css';

const CreateNotes = lazy(() => import("./pages/CreateNote"))
// const CreateNotes = lazy(() =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       resolve(import("./pages/CreateNote"));
//     }, 2000); // 2 second artificial delay
//   })
// );

export default function App() {
  const [islogin, setIsLogin] = useState(true);
  return (
    <div className="container">
      <BrowserRouter>
        <h1>My Notes App</h1>


        <Routes>
          <Route element={<RedirectIfAuthed islogin={islogin} />}>
            <Route path="/" element={<Login setIsLogin={setIsLogin} />} />
          </Route>

          <Route element={<CheckUser islogin={islogin} />}>
            <Route
              element={
                <NotesProvider>
                  <Outlet />
                </NotesProvider>
              }
            >
              <Route path="/notes" element={<NotesList />} />
              <Route path='/detail/:id'  element={<NoteDetail />}/>
              <Route path="/create" element={
                <Suspense fallback={<div>Loading...</div>}>
                  <CreateNotes />
                </Suspense>
              }
              />
              <Route path="/note/:id" element={<EditNote />} />
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}
