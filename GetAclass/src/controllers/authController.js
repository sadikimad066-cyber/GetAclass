// authController - login / logout
const User = require('../models/User');

const showLogin = (res, { error = null, email = '' } = {}) =>
  res.render('pages/login', { title: 'Connexion', error, email });

module.exports = {
  // GET /login - show the form (already logged in -> go home)
  loginPage: (req, res) => {
    if (req.session.user) return res.redirect('/');
    showLogin(res);
  },

  // POST /login - check the credentials, remember the user, then go home
  login: (req, res, next) => {
    const { email, password } = req.body;
    const user = User.findByEmail(email);

    if (!user || !User.checkPassword(user, password)) {
      return showLogin(res.status(401), {
        error: 'Adresse e-mail ou mot de passe incorrect.',
        email,
      });
    }

    // New session id on login (protects against session fixation)
    req.session.regenerate((err) => {
      if (err) return next(err);
      // Only safe info goes in the session, never the password hash
      req.session.user = { id: user.id, name: user.name, role: user.role };
      res.redirect('/');
    });
  },

  // GET /logout - forget the user, back to the login page
  logout: (req, res, next) => {
    req.session.destroy((err) => {
      if (err) return next(err);
      res.clearCookie('connect.sid');
      res.redirect('/login');
    });
  },
};
