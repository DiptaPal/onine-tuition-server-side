const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

const categories = require('./data/categories.json')
const courses = require('./data/courses.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Online Tuition')
});

app.get('/categories', (req, res) => {
    res.send(categories)
});

app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    const category_courses = categories.filter(category => category._id === id)
    res.send(category_courses);
});

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(course => course._id === id)
    res.send(selectedCourse)
});

app.listen(port, () => {
    console.log(`Online Tuition Server running on port: ${port}`);
});