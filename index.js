const express = require('express');
const path = require('path')
const app = express()
const exphbs = require('express-handlebars')
const person = require('./Model')
const PORT = process.env.PORT || 8000

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// setting static serving
app.use( express.static(path.join(__dirname,'public')) )

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine','handlebars')

// routing to home page
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})

// routing to trend page
app.get('/trend',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','trend.html'))
})

// routing to article container page
app.get('/articles',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/article','index.html'))
})
// routing to call of duty article page
app.get('/cod',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/cod','index.html'))
})
// routing to god of war article page
app.get('/godofwar',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/god_of_war','index.html'))
})
// routing to fortnite article page
app.get('/fortnite',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/fortnite','index.html'))
})

// routing to login page
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','login.html'))
})

// Profile page
app.use('/api/person', require('./Routes/api/profile'))

// display profile page
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

// profile update page
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