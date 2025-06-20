import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'segredo_super_secreto';

export function requireAuth(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'Token não enviado.' });
  const [, token] = auth.split(' ');
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: 'Token inválido.' });
  }
}
