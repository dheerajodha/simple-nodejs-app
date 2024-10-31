const express = require('express')
const app = express()

// test
app.get('/', (req, res) => res.send('Hello!! From STONEINTG-851 again!!'))
app.listen(3000, () => console.log('Server ready'))
