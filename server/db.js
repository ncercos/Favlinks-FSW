const Pool = require('pg').Pool
const pool = new Pool({
    user: 'nick',
    host: 'localhost',
    database: 'linksapi',
    password: '032702',
    port: 5432,
})

const getLinks = (req, res) => {
    pool.query('SELECT * FROM favlinks ORDER BY id ASC', (error, result) => {
        if(error) {
            throw error
        }
        res.status(200).json(result.rows)
    })
}

const insertLink = (req, res) => {
    const {name, url} = req.body

    pool.query('INSERT INTO favlinks (name, url) VALUES ($1, $2)', [name, url], (error, result) => {
            if(error) {
                throw error
            }
            res.status(201).send(`Link added named ${name} that directs to: ${url}`)
        })
}

const updateLink = (req, res) => {
    const id = parseInt(req.params.id)
    const {name, url} = req.body

    pool.query('UPDATE favlinks SET name = $1, url = $2 WHERE id = $3', [name, url, id], (error, result) => {
            if(error) {
                throw error
            }
            res.status(200).send(`Link modified with ID: ${id}`)
        })
}

const deleteLink = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('DELETE FROM favlinks where ID = $1', [id], (error, result) => {
            if(error) {
                throw error
            }
            res.status(200).send(`User deleted with ID: ${id}`)
        })
}

module.exports = {
    getLinks, 
    insertLink, 
    updateLink, 
    deleteLink,
}