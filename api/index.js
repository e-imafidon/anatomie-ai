const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/health', (_req, res) => res.send('OK'))
app.get('/', (_req, res) => res.json({ status: 'Anatomie API up' }))

app.listen(port, () => console.log(`Listening on ${port}`))
