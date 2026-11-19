// roomController - coming soon

module.exports = {
  list: (req, res) => res.render('pages/rooms', { title: 'Salles' }),
  availability: (req, res) => res.render('pages/availability', { title: 'Disponibilités' }),
};
