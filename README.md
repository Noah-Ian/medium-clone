# Modern Medium Clone

A full-stack Medium-inspired blogging platform built with React, TypeScript, Node.js, Express, Prisma, and PostgreSQL.

## Features

- User authentication
- Create and manage articles
- Comments
- Likes
- Bookmarks
- User following

## Tech Stack

React • TypeScript • Node.js • Express • Prisma • PostgreSQL • Tailwind CSS

## Setup

### 1. Clone the repository

git clone <your-repository-url>
cd modern-medium-clone

### 2. Install dependencies

cd server
npm install

cd ../client
npm install

### 3. Configure environment variables

Create `.env` inside `server`:

DATABASE_URL="postgresql://postgres:password@localhost:5432/medium_clone"
JWT_SECRET="your-secret-key"

### 4. Setup the database

cd server
npx prisma migrate dev
npx prisma generate

### 5. Run the backend

npm run dev

### 6. Run the frontend

cd client
npm run dev
