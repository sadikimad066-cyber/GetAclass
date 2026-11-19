# GetAclass

Room reservation app for students and teachers. **Coming soon.**

## Run
```
npm install
npm start
```
Then open http://localhost:3000

## Structure (MVC)
```
src/
  app.js              Express entry point
  models/             M - User, Room, Reservation (data + data access)
  views/              V - EJS pages (login, rooms, availability, reserve, my reservations, profile)
  controllers/        C - receive requests, call services
  routes/             URL -> controller mapping
  services/           Business rules (reservation service)
    strategies/       Strategy pattern - booking policy per role
    observers/        Observer pattern - reactions to reservation events
  realtime/           Singleton WebSocket manager
public/               CSS and browser JS
```
Everything is a placeholder for now.

## Test accounts (temporary, no database yet)
Open http://localhost:3000/login

| Role | Email | Password |
|---|---|---|
| Étudiant | etudiant@getaclass.test | Etudiant#2026 |
| Enseignant | enseignant@getaclass.test | Enseignant#2026 |
