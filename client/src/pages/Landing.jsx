import '../css/public.css'

// Components
import NavBar from '../components/NavBar'

function Landing() {
   return (
      <div>
         <NavBar />
         <div className='container'>
            <div className='title-container'>
               <h1 className='title'>Welcome! Let's create some book!!</h1>
               <p className='des-title'>I'm just make this website for fun and for upgrade my skill at Web Depelovment, please take a look!!!</p>
            </div>
         </div>
      </div>
   )
}

export default Landing