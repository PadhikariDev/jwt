import jwt from 'jsonwebtoken';

const secretKey = 'kyler123';

// Function to generate JWT token
export const generateToken = (payload) => {
    return jwt.sign(payload, secretKey, { expiresIn: '1h' });  // Expires in 1 hour
};

// Function to verify JWT token
export const verifyToken = (token) => {
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        throw new Error('Invalid token');
    }
};
