// GetAclass - entry point
const path = require('path');
const express = require('express');
const session = require('express-session');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true }));

// Sessions: remember who is logged in between requests (adds req.session)
app.use(session({
  secret: process.env.SESSION_SECRET || 'getaclass-dev-secret-change-me',
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, sameSite: 'lax', maxAge: 1000 * 60 * 60 * 2 }, // 2 hours
}));

// Make the logged-in user available in every view (used by the nav bar)
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

app.use('/', routes);

app.listen(PORT, () => console.log(`GetAclass running on http://localhost:${PORT}`));