const express = require('express')
const app = express()

// adding to trigger
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(3000, () => console.log('Server ready'))
