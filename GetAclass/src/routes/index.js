// Routes: URL -> controller
const router = require('express').Router();
const home = require('../controllers/homeController');
const auth = require('../controllers/authController');
const profile = require('../controllers/profileController');
const rooms = require('../controllers/roomController');
const reservations = require('../controllers/reservationController');

router.get('/', home.index);

router.get('/login', auth.loginPage);   // Authentification
router.post('/login', auth.login);
router.get('/logout', auth.logout);

router.get('/profile', profile.show);   // Profil

router.get('/rooms', rooms.list);                 // Consultation des salles
router.get('/availability', rooms.availability);  // Recherche de disponibilité

router.get('/reserve', reservations.newForm);            // Réservation
router.get('/my-reservations', reservations.mine);       // Mes réservations
router.post('/reservations/:id/cancel', reservations.cancel); // Annulation

module.exports = router;
