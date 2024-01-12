const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    // Extract the token from the Authorization header
    const token = req.headers['authorization'];

    // Check if the token is present and starts with 'Bearer '
    if (!token || !token.startsWith('Bearer ')) {
      return res.status(401).send('Unauthorized');
    }

    // Extract the token without the 'Bearer ' prefix
    const tokenWithoutBearer = token.split(' ')[1];

    // Verify the token
    jwt.verify(tokenWithoutBearer, 'CFT-task-backend', (err, user) => {
      if (err) {
        console.error('Error verifying token:', err);
        return res.status(403).send('Forbidden');
      }

      // Attach the user information to the request for further use
      req.user = user;

      // Continue to the next middleware or route handler
      next();
    });
  } catch (error) {
    console.error('Middleware error:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = verifyToken;
