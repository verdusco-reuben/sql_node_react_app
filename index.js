const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

app.use(cors());

const SELECT_ALL_BOOKS_QUERY = "SELECT * FROM books";

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'booksdb'
});

connection.connect(err => {
    if(err) {
        return err;
    }
});

app.get('/', (req,res) => {
    res.send('homepage')
})

app.get('/products/add', (req, res) =>{
    const { title, author } = req.query;
    console.log(req.query)
    const INSERT_PRODUCTS_QUERY = `INSERT INTO books (title, author) VALUES("${title}", "${author}")`;
    connection.query(INSERT_PRODUCTS_QUERY, (err, results) => {
        if(err) { return err; }
        else{
            return res.send('successfully added product')
        }
    })
});

app.get('/products', (req,res) => {
    connection.query(SELECT_ALL_BOOKS_QUERY, (err, results) => {
        if(err) {
            return err;
        }else{
            return res.json({
                data: results
            })
        }
    })
})
app.listen(4000, () => {
    console.log("listening on port 4000")
})