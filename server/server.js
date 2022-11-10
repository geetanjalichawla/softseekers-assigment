const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json({"user": ["user1", "user2", "user3"]}))

app.listen(5000, () => console.log(`Example app listening on port ${5000}!`))