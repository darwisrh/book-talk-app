const express = require('express')
const routes = express()

const {
    createBook,
    archiveFalse,
    archiveTrue,
    getAllBook,
    getBookById,
    deleteBook
} = require('../controller/book')

routes.post('/book', createBook)
routes.patch('/false/:id', archiveFalse)
routes.patch('/true/:id', archiveTrue)
routes.get('/books', getAllBook)
routes.get('/book/:id', getBookById)
routes.delete('/book/:id', deleteBook)

module.exports = routes