import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-here';

export const signToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

export const getTokenFromHeaders = (req) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7);
  }
  return null;
};

export const authenticateUser = (req) => {
  const token = getTokenFromHeaders(req);
  if (!token) {
    return null;
  }
  
  const decoded = verifyToken(token);
  return decoded;
};

export const requireAuth = (handler) => {
  return async (req, res) => {
    const user = authenticateUser(req);
    
    if (!user) {
      return res.status(401).json({ error: 'Authentication required' });
    }
    
    req.user = user;
    return handler(req, res);
  };
};

export const requireAdmin = (handler) => {
  return async (req, res) => {
    const user = authenticateUser(req);
    
    if (!user) {
      return res.status(401).json({ error: 'Authentication required' });
    }
    
    if (user.role !== 'admin') {
      return res.status(403).json({ error: 'Admin access required' });
    }
    
    req.user = user;
    return handler(req, res);
  };
};