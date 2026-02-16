// const http = require('http')
const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(express.json())
app.use(morgan('tiny'))

let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
]
// 2. Créer un nouveau token nommé ':body'
morgan.token('body', (request, response) => {
  return JSON.stringify(request.body)
})

app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body'),
)

app.get('/', (request, response) => {
  response.json(persons)
})
app.get('/info', (request, response) => {
  const date = new Date()
  const count = persons.length
  response.send(`<p>Phonebook has info for ${count} people</p> <p>${date}</p>`)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)

  const person = persons.find((person) => person.id === id)
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter((person) => person.id !== id)
  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const body = request.body
  // verifier si le nom et le numero sont present
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'name or number missing',
    })
  }
  // verifier si le nom existe deja ds le repertoir
  const nameExists = persons.some((person) => person.name === body.name)
  if (nameExists) {
    return response.status(400).json({
      error: 'name must be unique',
    })
  }
  const generateId = () => {
    return Math.floor(Math.random() * 1000000)
  }
  // creer une nouvele personne
  const newPerson = {
    id: generateId(),
    name: body.name,
    number: body.number,
  }
  persons = persons.concat(newPerson)

  response.status(201).json(newPerson)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
