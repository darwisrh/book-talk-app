const { book } = require('../models')

const createBook = async (req, res) => {
    try {
        const data = req.body
        const dataContainer = {
            ...data,
            is_archived: true
        }

        const newBook = await book.create(dataContainer)

        res.send({
            status: 'success',
            data: {
                newBook
            }
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({
            message: 'Server error'
        })
    }
}

const archiveFalse = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body
        const dataContainer = {
            ...data,
            is_archived: false
        }

        await book.update(dataContainer, {
            where: {
                id
            }
        })

        const currentBook = await book.findOne({
            where: {
                id
            }
        })

        res.send({
            status: 'success',
            data: {
                currentBook
            }
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({
            message: 'Server error'
        })
    }
}

const archiveTrue = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body
        const dataContainer = {
            ...data,
            is_archived: true
        }

        await book.update(dataContainer, {
            where: {
                id
            }
        })

        const currentBook = await book.findOne({
            where: {
                id
            }
        })

        res.send({
            status: 'success',
            data: {
                currentBook
            }
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({
            message: 'Server error'
        })
    }
}

const getAllBook = async (req, res) => {
    try {
        const allBook = await book.findAll()

        res.send({
            status: 'success',
            data: {
                allBook
            }
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({
            message: 'Server error'
        })
    }
}

const getBookById = async (req, res) => {
    try {
        const { id } = req.params

        const oneBook = await book.findOne({
            where: {
                id
            }
        })

        res.send({
            status: 'success',
            data: {
                oneBook
            }
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({
            message: 'Server error'
        })
    }
}

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params

        await book.destroy({
            where: {
                id
            }
        })

        res.send({
            status: 'success',
            message: `Book with id = ${id} deleted!`
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({
            message: 'Server error'
        })
    }
}

module.exports = {
    createBook,
    archiveFalse,
    archiveTrue,
    getAllBook,
    getBookById,
    deleteBook
}