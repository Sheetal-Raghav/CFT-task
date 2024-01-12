const User = require("../models/UserModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    // Generate a token for the new user
    const token = jwt.sign({ email }, 'CFT-task-backend', { expiresIn: '1h' });

    // Return the token as a response
    res.json({ token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};


// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if the provided email is the allowed email
//     if (email !== 'admin@codesfortomorrow.com') {
//       return res.status(401).send('Access denied. Invalid email.');
//     }

//     // Check if the user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).send('Invalid credentials');
//     }

//     // Compare the provided password with the stored hashed password
//     const passwordMatch = await bcrypt.compare(password, user.password);
//     if (!passwordMatch) {
//       return res.status(401).send('Invalid credentials');
//     }

//     // Generate a token for the authenticated user
//     const token = jwt.sign({ email }, 'CFT-task-backend', { expiresIn: '1h' });

//     // Return the token as a response
//     res.json({ token });
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

const login = async (req, res) => {
const { email, password } = req.body;
if (email === 'admin@codesfortomorrow.com' && password === 'Admin123!@#') {
  const token = jwt.sign({ email }, 'CFT-backend-task', { expiresIn: '1h' });
  res.json({ message:"login successfully",token,email,password });
} else {
  res.status(401).send('Invalid credentials');
}
}

module.exports = 
{
    signup,
    login
}


