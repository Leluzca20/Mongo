# Mongo API

API minimal for testing with Thunder Client. Implements GET/POST/PUT/DELETE on `/api/items`.

Setup:

```
cp .env.example .env
# fill MONGO_URI in .env
npm install
npm run dev
```

Endpoints:

- GET /api/items
- GET /api/items/:id
- POST /api/items  { name, description }
- PUT /api/items/:id
- DELETE /api/items/:id

Use Thunder Client or Postman to test.
