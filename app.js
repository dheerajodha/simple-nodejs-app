const express = require('express')
const app = express()

// test
app.get('/', (req, res) => res.send('Hello!!'))
app.listen(3000, () => console.log('Server ready'))
