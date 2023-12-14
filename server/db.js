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
    pool.query('INSERT INTO favlinks (name, url) VALUES ($1, $2)', [name, url],
        (error, result) => {
            if(error) {
                throw error
            }
            res.status(201).json(`Link added with ID: ${res.row[0].id}`)
        })
}

module.exports = {
    getLinks, insertLink,
}