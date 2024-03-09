const isAuthenticated = (req, res, next) => {
    if (req.session.currentOwner) {
      return next()
    } else {
      res.redirect('/sessions/new')
    }
  }
  
  module.exports = isAuthenticated