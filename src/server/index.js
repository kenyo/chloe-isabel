const express = require('express')
const join = require('path').join
const app = express()

const PUBLIC_DIR_PATH = join(__dirname, '..', '..', 'public')
const mainHtml = join(PUBLIC_DIR_PATH, 'index.html')
// app.get('/', (req, res) => res.send('hello world'))

console.log(PUBLIC_DIR_PATH)

app.use(express.static(PUBLIC_DIR_PATH))

app.get('*', (req, res) => res.sendFile(mainHtml))

app.listen(3000, () => console.log('ant race app started on port 3000'))
