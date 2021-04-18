//2. Create a App.jsx component.
import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Note from './Components/Note'
import notes from './notes'

function App() {
    let createNotes = notes.map(note => (
        <Note
            key={note.key}
            title={note.title}
            content={note.content}
        />
    ))
    return (
        <div>
            <Header />
            {createNotes}
            <Footer />
        </div>
    )
}

export default App