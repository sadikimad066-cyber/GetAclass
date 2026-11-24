// Routes: URL -> controller
const router = require('express').Router();
const requireLogin = require('../middlewares/requireLogin');
const home = require('../controllers/homeController');
const auth = require('../controllers/authController');
const profile = require('../controllers/profileController');
const rooms = require('../controllers/roomController');
const reservations = require('../controllers/reservationController');

// Open to everyone
router.get('/login', auth.loginPage);   // Authentification
router.post('/login', auth.login);
router.get('/logout', auth.logout);

// Logged-in users only (requireLogin runs first, then the controller)
router.get('/', requireLogin, home.index);

router.get('/profile', requireLogin, profile.show);   // Profil

router.get('/rooms', requireLogin, rooms.list);                 // Consultation des salles
router.get('/availability', requireLogin, rooms.availability);  // Recherche de disponibilité

router.get('/reserve', requireLogin, reservations.newForm);            // Réservation
router.get('/my-reservations', requireLogin, reservations.mine);       // Mes réservations
router.post('/reservations/:id/cancel', requireLogin, reservations.cancel); // Annulation

module.exports = router;
