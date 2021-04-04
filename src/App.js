//2. Create a App.jsx component.
import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Note from './Components/Note'

function App() {
    return (
        <div>
            <Header />
            <Note />
            <Footer />
        </div>
    )
}

export default App