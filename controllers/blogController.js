//recupero la variabile di connessioneAdd commentMore actions
const connection = require('../data/db')

const index = (req, res) => {
    //preparo la query per recuperare i blog dal dbAdd commentMore actions
    const sql = "SELECT * FROM posts";
    //eseguo la query
    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query failed" })
        }
        res.json(results)
    })
}

const show = (req, res) => {
    res.send("post con id: " + req.params.id)
}

module.exports = {
    index,
    show
}