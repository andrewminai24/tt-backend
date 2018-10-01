# TownToday backend

### TODOs
1. Firebase Database
  * Schemas
    1. Categories
    2. Events
    3. Users
2. User Authentication
  * Basic Authentication for Admin accounts
  * OAuth for users (through Firebase?)
  * Tokens (JSON Web Tokens) for React Native client
3. APIs (all applicable)
  1. Categories
    1. GET /categories (returns all categories)
    2. POST /categories (adds new category; ex: /categories?name="Movies"&image="uri/to/image")
    3. PUT (not applicable)
    4. DELETE /categories (deletes all categories)
  2. Categories/:categoryId
    1. GET /categories/123 (returns category 123)
    2. POST (not applicable)
    3. PUT /categories (updates category; ex: /categories/123?oldName="Movies"&newName="Theater Showings")
    4. DELETE /categories/123 (deletes category 123)
  3. Events
    1. GET /events (returns all events)
    2. POST /events (adds new event)
    3. PUT (not applicable)
    4. DELETE /events (deletes all events)
  4. Events/:eventId
    1. GET /events/201 (returns event 201)
    2. POST (not applicable)
    3. PUT /events (updates event)
    4. DELETE /events/201 (deletes event 201)
  5. Users
    1. GET /users (returns all users)
    2. POST /users (adds new user)
    3. PUT (not applicable)
    4. DELETE /users (deletes all users)
  6. Users/:userId
    1. GET /users/1223 (returns user 1223)
    2. POST (not applicable)
    3. PUT /1223 (updates user)
    4. DELETE /users/1223 (deletes user 1223)
