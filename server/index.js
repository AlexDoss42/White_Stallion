const express = require('express')

const ServiceCtrl = require('./controllers/ServiceRecords')

const app = express()


app.use(express.json())

app.get('/api/service', ServiceCtrl.read)
app.post('/api/service', ServiceCtrl.create)
app.put('/api/service/:id', ServiceCtrl.update)
app.delete('/api/service/:id', ServiceCtrl.delete)

const port = 4242
app.listen(port, () => console.log(`It's over Anakin! I have the ${port} port`))