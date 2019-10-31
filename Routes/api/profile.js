const express = require('express')
const router = express.Router()
const person = require('../../Model')
const uuid = require('uuid')

const app = express()

router.get('/',(req,res)=>{
    res.json(person)
})

// create member
router.post('/signup',(req,res)=>{
    var num = Math.random() * 5;
    const newMember = {
        id: uuid.v4(),
        profile_url: "https://api.adorable.io/avatars/" + num,
        name: req.body.name,
        email: req.body.email,
        pass: req.body.password,
        bio: "lorem ipsum dolor et"
    }

    if( !newMember.name || !newMember.email ){
        return res.status(400).json({ msg: "Please include all the details" })
    }
    else{
        person.push(newMember);
        res.redirect(`/profile/${newMember.id}`)
    }
})

// update member
router.post('/update/:id',(req,res)=>{

    const found = person.some( person =>  person.id == req.params.id )
    if( found ){
        const updPerson = req.body;
        person.forEach( p => {
            if( p.id == req.params.id ){
                console.log(updPerson)
                p.name = updPerson.name ? updPerson.name : p.name;
                p.email = updPerson.email ? updPerson.email : p.email;
                p.bio = updPerson.bio ? updPerson.bio : p.bio;
            }
            // res.json({ msg: "Person updated", p })
        })
        res.redirect(`/profile/${req.params.id}`)
    }else{
        res.status(500).json({ msg: `Error in updating with id: ${req.params.id}` })
    }
})

module.exports = router;