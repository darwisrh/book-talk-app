import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Button } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useState } from 'react'
import { API } from '../config/api'
import { useQuery, useMutation } from '@tanstack/react-query'

// Components
import NavBar from '../components/NavBar'

import '../css/public.css'

function BookList() {

   
   const { data: books, refetch } = useQuery(['bookCache'], async () => {
      const data = await API.get('/books')
      return data.data.data.allBook
   })
   const bookArchiveFilter = books?.filter(book => {
      if (book.is_archived === false) {
         return book
      }
   })
   const bookArchiveFilterTrue = books?.filter(book => {
      if (book.is_archived === true) {
         return book
      }
   })

   const [id, getId] = useState()

   const handleArchive = useMutation(async (e) => {
      try {
         e.preventDefault()
         await API.patch(`/true/${id}`)
         refetch()
      } catch (err) {
         console.log(err)
         alert('Server error')
      }
   })

   const handleUnarchive = useMutation(async (e) => {
      try {
         e.preventDefault()
         await API.patch(`/false/${id}`)
         refetch()
      } catch (err) {
         console.log(err)
         alert('Server error')
      }
   })

   return (
      <div>
         <NavBar />
         <div className="tab-container">
            <Tabs size='md' variant='enclosed'>
               <TabList>
                  <Tab className="tab">Book List</Tab>
                  <Tab className="tab">Archived</Tab>
               </TabList>
               <TabPanels>
                  <TabPanel>
                     
                  <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                     {
                        bookArchiveFilter?.map(books => (
                           <form onSubmit={(e) => handleArchive.mutate(e)}>
                           <Card key={books.id}>
                              <CardHeader margin="0 0 5px" padding="10px">
                                 <Heading size='md'>{books.title}</Heading>
                              </CardHeader>
                              <CardBody margin="0 0 5px" padding="10px">
                                 <Text>{books.description}</Text>
                              </CardBody>
                              <CardBody margin="0 0 5px" padding="10px">
                                 <Text>{books.pages} pages</Text>
                              </CardBody>
                              <CardFooter margin="0" padding="10px">
                                 <Button type='submit' onClick={() => getId(books.id)}>Archive Book</Button>
                              </CardFooter>
                           </Card>
                           </form>
                        ))
                     }
                  </SimpleGrid>

                  </TabPanel>
                  <TabPanel>

                     <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                        {
                           bookArchiveFilterTrue?.map(books => (
                              <form onSubmit={(e) => handleUnarchive.mutate(e)}>
                              <Card key={books.id}>
                                 <CardHeader margin="0 0 5px" padding="10px">
                                    <Heading size='md'>{books.title}</Heading>
                                 </CardHeader>
                                 <CardBody margin="0 0 5px" padding="10px">
                                    <Text>{books.description}</Text>
                                 </CardBody>
                                 <CardBody margin="0 0 5px" padding="10px">
                                    <Text>{books.pages} pages</Text>
                                 </CardBody>
                                 <CardFooter margin="0" padding="10px">
                                    <Button type='submit' onClick={() => getId(books.id)}>Unarchive Book</Button>
                                 </CardFooter>
                              </Card>
                              </form>
                           ))
                        }
                     </SimpleGrid>

                  </TabPanel>
               </TabPanels>
            </Tabs>
         </div>
      </div>
   )
}

export default BookList