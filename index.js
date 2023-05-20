const express = require('express')
const server = express()
const cors = require('cors')
server.use(cors({ origin: 'http://localhost:3000' }))

const logic = require('./services/logic')
const res = require('express/lib/response')

//convert JSON to javascript //from frontend
server.use(express.json())


//get all 

server.get('/getAllEmployees', (req, res) => {
    logic.getAllEmployees().then(result => {
        res.status(result.statusCode).json(result)
    })
})

//single emp

server.get('/getEmployee/:id', (req, res) => {
    logic.getEmployee(req.params.id).then(result => {
        res.status(result.statusCode).json(result)
    })
})

//delete 

server.delete('/deleteEmployee/:id', (req, res) => {
    logic.removeEmployee(req.params.id).then(result => {
        res.status(result.statusCode).json(result)
    })
})

//add new employee

server.post('/addEmployee', (req, res) => {
    logic.addNewEmployee
        (req.body.id,
            req.body.name,
            req.body.designation,
            req.body.salary,
            req.body.experience)
        .then(result => {
            res.status(result.statusCode).json(result)
        })
})

server.post('/editEmployee', (req, res) => {
    logic.editEmployee
        (req.body.id,
            req.body.name,
            req.body.designation,
            req.body.salary,
            req.body.experience)
        .then(result => {
            res.status(result.statusCode).json(result)
        })
})








server.listen(8000, () => {
    console.log("--------EMS server started-----------");
})