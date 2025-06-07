# Dev Prompt

this is my exploration project to learn about typescript + integrated it with AI API.

## Study Case
**Goal**: Build a developer-oriented prompt management and testing tool, where users can save, test, and organize prompts that interact with an AI (e.g., OpenAI, Gemini).

## Tech Stack
- Node.js with Express.js
- TypeScript
- PostgreSQL (with Prisma)
- Gemini or OpenAI API
- JWT for authentication

## Code Structure
```
src/
├── controllers/
├── routes/
├── services/
├── middlewares/
└── index.ts
```

## Core Features
- Authentication
- Prompt Management
- Prompt Test

## API Flow
### Sign up
```
curl --location 'http://localhost:3000/auth/sign_up' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "adit",
    "email": "adit@gmail.com",
    "password": "abcd123"
}'
```

### Sign in
```
curl --location 'http://localhost:3000/auth/sign_in' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "adit@gmail.com",
    "password": "abcd123"
}'
```

### Create Prompt
```
curl --location 'http://localhost:3000/prompt' \
--header 'Authorization: Bearer {token}' \
--header 'Content-Type: application/json' \
--data '{
    "title": "Summarize Blog",
    "description": "For Summarize Blog",
    "template": "Summarize this blog post: {{blog_content}}",
    "tags": [
        "summary",
        "blog"
    ]
}'
```

### Test Prompt
```
curl --location 'http://localhost:3000/prompt/1/test' \
--header 'Authorization: Bearer {token}' \
--header 'Content-Type: application/json' \
--data '{
    "variables": {
        "blog_content": "Long text..."
    }
}'
```
