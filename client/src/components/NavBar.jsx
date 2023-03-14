import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import '../css/public.css'

function NavBar() {
   return (
      <nav>
         <div className='nav-logo'>
            <Link to="/">
               <h2>BookTalk!</h2>
            </Link>
         </div>
         <div className='nav-button-cont'>
            <Link to="/add-book">
               <Button className="create" variant='solid'>
                  Add Book
               </Button>
            </Link>
            <Link to="/book-list">
               <Button className="create" variant='solid'>
                  Book List
               </Button>
            </Link>
         </div>
      </nav>
   )
}

export default NavBar