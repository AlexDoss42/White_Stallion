const express = require('express')

const app = express()


app.use(express.json())

app.get('/service')

const port = 4242
app.listen(port, () => console.log(`It's over Anakin! I have the ${port} port`))