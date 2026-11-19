// reservationController - coming soon

module.exports = {
  newForm: (req, res) => res.render('pages/reserve', { title: 'Réserver une salle' }),
  mine: (req, res) => res.render('pages/my-reservations', { title: 'Mes réservations' }),
  cancel: (req, res) => res.render('pages/my-reservations', { title: 'Annulation' }),
};
