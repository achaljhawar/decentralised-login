import jwt from 'jsonwebtoken';
const secretKey = 'mySecretKey';
export default function handler(req, res) {
    if (req.method !== 'POST') {
      res.status(405).end();
      return;
    }
  
    const authHeader = req.headers.authorization;
  
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Invalid token' });
    }
  
    const token = authHeader.split(' ')[1];
  
    try {
      const decoded = jwt.verify(token, secretKey);
      const currentTime = Math.floor(Date.now() / 1000);
      if (decoded.exp < currentTime) {
        res.json({message: 'Expired'});
      } else {
        res.json({message: 'Valid'});
      }
    } catch (err) {
      res.status(401).json({ error: 'Invalid token' });
    }
  }