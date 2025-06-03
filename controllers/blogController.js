//recupero la variabile di connessione
const connection = require('../data/db')

const index = (req, res) => {
    //preparo la query per recuperare i blog dal db
    const sql = "SELECT * FROM posts";
    //eseguo la query
    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query failed" })
            //restituisco il codice di stato
        res.sendStatus(204)
        }
        res.json(results)
    })
}

const show = (req, res) => {
    res.send("post con id: " + req.params.id)
}

const destroy = (req, res) => {
    //recupero id
    const id = req.params.id;
    // query
    connection.query("DELETE FROM posts WHERE id = ?", [id], (err) => {
        //funzione di callback ha solo un parametro perché destroy deve restituire il codice di stato 204
        if (err) return res.status(500).json({ error: "Database query failed" + err });
    })

}

module.exports = {
    index,
    show,
    destroy
}