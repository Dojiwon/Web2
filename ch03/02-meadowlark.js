const express = require('express')
const expresshandlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000

//핸틀바 뷰 엔진 설정
app.engine('handlebars', expresshandlebars({
    defaultLayout: 'main',
}))

app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => res.render('home'))

app.get('/about', (req,res) => res.render('about'))

//custom 404 page
app.use((req, res) => {
    res.status(404)
})

app.listen(port, () => console.log(
    'Express started on http://localhost:${port};'+
    'press Ctrl-C to terminate.'))