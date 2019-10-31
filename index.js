const express = require('express');
const path = require('path')
const app = express()
const exphbs = require('express-handlebars')
const person = require('./Model')
const PORT = process.env.PORT || 8000

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use( express.static(path.join(__dirname,'public')) )

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine','handlebars')

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})

app.get('/trend',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','trend.html'))
})

app.get('/articles',(req,res)=>{
    res.send("<h1>Article Page</h1>")
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','login.html'))
})

// Profile page
app.use('/api/person', require('./Routes/api/profile'))

app.get('/profile/:id',(req,res)=>{

    const found = person.some( person => person.id == req.params.id )

    if( found ){
        var profile = person.filter( person => person.id == req.params.id )
        // res.send(profile[0])
    }else{
        res.status(400).json({ msg: `Person not found with id: ${req.params.id}` })
    }
    res.render('profile',{
        profile_url: profile[0].profile_url,
        id: profile[0].id,
        name: profile[0].name,
        email: profile[0].email,
        bio: profile[0].bio
    })
})
app.get('/profile/update/:id',(req,res)=>{

    const found = person.some( person => person.id == req.params.id )

    if( found ){
        var profile = person.filter( person => person.id == req.params.id )
        // res.send(profile[0])
    }else{
        res.status(500).json({ msg: `Some error occured with id: ${req.params.id}` })
    }
    res.render('update',{
        profile_url: profile[0].profile_url,
        id: profile[0].id,
        name: profile[0].name,
        email: profile[0].email,
        bio: profile[0].bio
    })
})

app.listen(PORT,()=>console.log(`Server listening on ${PORT}`))