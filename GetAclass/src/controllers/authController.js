// authController - coming soon

module.exports = {
  loginPage: (req, res) => res.render('pages/login', { title: 'Connexion' }),
  logout: (req, res) => res.render('pages/home', { title: 'Déconnexion' }),
};
