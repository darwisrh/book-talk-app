import { Routes, Route } from 'react-router-dom'

// Pages
import Landing from './pages/Landing'
import CreateBook from './pages/CreateBook'
import BookList from './pages/BookList'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/add-book' element={<CreateBook />} />
      <Route path='/book-list' element={<BookList />} />
    </Routes>
  )
}

export default App