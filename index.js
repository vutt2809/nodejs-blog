const express = require('express')
const app = express()
const port = 5000

//route
app.get('/', (req, res) => {
    let a = 1;
    let b = 2;
    let c = a + b;
    res.send('hello')
})
app.get('/tin-tuc', (req, res) => res.send('tin tuc'))
app.get('/am-nhac', (req, res) => res.send('am nhac'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))