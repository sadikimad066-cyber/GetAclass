// authController - login page
const User = require('../models/User');

const showLogin = (res, { error = null, email = '' } = {}) =>
  res.render('pages/login', { title: 'Connexion', error, email });

module.exports = {
  // GET /login - show the form
  loginPage: (req, res) => showLogin(res),

  // POST /login - check the credentials, then go to the home page
  login: (req, res) => {
    const { email, password } = req.body;
    const user = User.findByEmail(email);

    if (!user || !User.checkPassword(user, password)) {
      return showLogin(res.status(401), {
        error: 'Adresse e-mail ou mot de passe incorrect.',
        email,
      });
    }

    res.redirect('/');
  },

  logout: (req, res) => res.render('pages/home', { title: 'Déconnexion' }),
};
