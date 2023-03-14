import { useState } from "react"
import NavBar from "../components/NavBar"
import {
   FormControl,
   FormLabel,
   Input,
   Button
 } from '@chakra-ui/react'
import '../css/public.css'
import { useNavigate } from "react-router-dom"

// Api
import { API } from '../config/api'
import { useMutation } from '@tanstack/react-query'

function CreateBook() {

   const navigate = useNavigate()

   const [form, setForm] = useState({
      title: '',
      pages: '',
      description: ''
   })

   const handleChange = e => {
      setForm({
         ...form,
         [e.target.name]: e.target.value
      })
   }

   const handleSubmit = useMutation(async e => {
      try {
         e.preventDefault()

         if (!form) {
            return alert('Fill all the form!!')
         }

         await API.post('/book', form)
         navigate('/book-list')
      } catch (err) {
         console.log(err)
         alert('Server error')
      }
   })


   return (
      <div>
         <NavBar />
         <div>
         <div className="form-container">
            <form onSubmit={e => handleSubmit.mutate(e)}>
            <FormControl isRequired className="form">
               <div>
                  <FormLabel className="form-label">Title</FormLabel>
                  <Input
                  className="input"
                  type="text" 
                  placeholder='Title'
                  name="title"
                  onChange={handleChange}
                   />
               </div>
               <div>
                  <FormLabel htmlFor="pages" className="form-label">Pages</FormLabel>
                  <Input 
                  id="pages"
                  className="input"
                  type="number"
                  placeholder='Pages'
                  name="pages"
                  onChange={handleChange}
                   />
               </div>
               <div>
                  <FormLabel htmlFor="description" className="form-label">Description</FormLabel>
                  <Input 
                  id="description"
                  className="input" 
                  type="text"
                  placeholder='Description'
                  height="70px"
                  name="description"
                  onChange={handleChange} 
                  />
               </div>
               <div className="button">
                  <Button type="submit" className="submit-button">Submit</Button>
               </div>
            </FormControl>
            </form>
         </div>
         </div>
      </div>
   )
}

export default CreateBook