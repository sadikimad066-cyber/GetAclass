// Model: User
// TEMPORARY: test users kept in memory until a database is chosen.
// Passwords are stored as scrypt hashes (Node built-in crypto), never in plain text.
// Test accounts are listed in README.md.
const crypto = require('crypto');

const users = [
  {
    id: 1,
    name: 'Étudiant Test',
    email: 'etudiant@getaclass.test',
    role: 'etudiant',
    salt: '4f2c4a0f0e56a425951db422d960ad7f',
    passwordHash: '2294fb20c2f877c195468e89283a0246682308a71948a64b7273600640d4908ab80d47807fe5decf795083a0f22a436f18feb2c397a51a81289be9458afbd0e3',
  },
  {
    id: 2,
    name: 'Enseignant Test',
    email: 'enseignant@getaclass.test',
    role: 'enseignant',
    salt: 'ba7aadf8224f5edbef634f462f5c4e2f',
    passwordHash: '7ba6ae1eb1b1bdb9636a58d019a398b392695e96363c8ac9b5bebdb4ad0eb98df1fa177b017381292e71216a98a62c3b35cafc85873ef3e142e0f8e73e0e0bce',
  },
];

class User {
  static findByEmail(email) {
    const wanted = String(email || '').trim().toLowerCase();
    return users.find((u) => u.email === wanted) || null;
  }

  static checkPassword(user, password) {
    const hash = crypto.scryptSync(String(password || ''), user.salt, 64);
    return crypto.timingSafeEqual(hash, Buffer.from(user.passwordHash, 'hex'));
  }
}

module.exports = User;
