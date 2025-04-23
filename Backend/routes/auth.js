import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const router = express.Router();
// In-memory dummy user data (replace later with DB)
const users = [
  { id: 1, email: 'admin@gmail.com', password: bcrypt.hashSync('123456', 10), role: 'admin' },
  { id: 2, email: 'user@gmail.com', password: bcrypt.hashSync('123456', 10), role: 'user' }
];

// Login Route
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) return res.status(404).json({ message: 'User not found' });

  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.cookie('token', token, { httpOnly: true }).json({ message: 'Login successful' });
});

// Logout
router.post('/logout', (req, res) => {
  res.clearCookie('token').json({ message: 'Logged out' });
});

export default router;
