# Friendr

Friendr is a social web app for finding and connecting with new friends at your university. Discover people nearby, filter by interests, and chat with new connections—all in one place.

## Features

- **Profile Creation:** Register and create a profile with your city, university, and hobbies.
- **Smart Finder:** Filter potential friends by city, university, and hobbies.
- **Like/Dislike Profiles:** Browse and like profiles to build your friends list.
- **Dashboard:** Quick access to categories like "At Your University", "Recently Active", and more.
- **Chat:** Message your friends directly within the app.
- **Phone Verification:** Optionally link your phone number for added trust.
- **Contact Permissions:** Control whether your existing contacts can find you.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- PostgreSQL database

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd friendr
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory with the following (edit as needed):
   ```
   PGUSER=your_db_user
   PGHOST=your_db_host
   PGDATABASE=your_db_name
   PGPASSWORD=your_db_password
   PGPORT=5432
   PGSSLMODE=disable
   PORT=8080
   ```

4. **Set up the database:**
   - Create a PostgreSQL database and a `users` table:
     ```sql
     CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       username VARCHAR(255) NOT NULL,
       password VARCHAR(255) NOT NULL,
       email VARCHAR(255),
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     );
     ```

### Running the App

- **Development mode (with hot reload):**
  ```bash
  npm run dev
  ```
  The frontend will be available at `http://localhost:5173` and the backend/API at `http://localhost:8080`.

- **Production build:**
  ```bash
  npm run build
  npm start
  ```

- **Linting:**
  ```bash
  npm run lint
  ```

- **Docker (optional):**
  ```bash
  npm run docker
  ```

## Usage

- Register a new account and create your profile.
- Use the Finder to discover and filter potential friends.
- Like profiles to add them to your friends list.
- Start a chat with your friends.
- Manage your profile and privacy settings from the Profile page.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Authors

- Yaozhizai Xiao
- Luc Hutton
- Alex Wei
