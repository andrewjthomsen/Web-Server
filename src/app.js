const express = require('express');

const app = express()

app.get('', (req, res) => {
    res.send('Hello express')
})

app.get('/help', (req, res) => {
    res.send('Help page')
})
app.get('/about', (req, res) => {
    res.send('Title page')
})
app.get('/weather', (req, res) => {
    res.send('Weather page')
})
app.listen(3000, () => {
    console.log('Server running on PORT 3000.')
})