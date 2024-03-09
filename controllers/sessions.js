const bcrypt = require('bcrypt')
const router = require('express').Router()
const Owner = require('../models/Owner.js')

router.get('/new', (req, res) => {
    res.render('sessions/new.ejs', { 
        currentOwner: req.session.currentOwner
    })
})


router.post('/', async (req, res) => {
  try {
    const foundOwner = await Owner.findOne({ username: req.body.username })
    if (!foundOwner) {
        res.send('<a  href="/">Sorry, no user found </a>')
    
    } else if (bcrypt.compareSync(req.body.password, foundOwner.password)) {
        req.session.currentOwner = foundOwner
        res.redirect('/')
    } else {
        res.send('<a href="/"> password does not match </a>')
    }
  } catch(err) {
    console.log(err)
    res.send('oops the db had a problem')
  }
})

router.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/rescue')
  })
})

module.exports = router





















