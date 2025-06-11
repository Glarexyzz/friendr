import express from 'express';
import bcrypt from 'bcrypt';
import pool from '../db.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const hashed = await bcrypt.hash(password, 10);
    await pool.query(
      'INSERT INTO users (username, password, email) VALUES ($1, $2, $3)',
      [username, hashed, email]
    );
    res.status(201).json({ message: 'User registered!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📍TOBE DELETED IN REAL ONE📍 
// GET /api/auth/users → View all registered users (excluding password)
router.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, username, email, created_at FROM users');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;