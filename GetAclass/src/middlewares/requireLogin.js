// Middleware: only lets logged-in users through, sends the others to /login
module.exports = (req, res, next) => {
  if (req.session.user) return next();
  res.redirect('/login');
};
