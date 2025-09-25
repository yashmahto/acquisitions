import logger from '#src/config/logger.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET_KEY = process.env.JWT_SECRET || 'your_default_secret_key';
const JWT_EXPIRES_IN ='1d';

export const jwttoken = {
    sign : (payload) => {
        try {
            return jwt.sign(payload,JWT_SECRET_KEY, {expiresIn: JWT_EXPIRES_IN});

        } catch (error) {
            logger.error('Failed to authenticate tokern' , error);
            throw new Error('Failed to authenticate token');
        }
    },

    verify : (token) => {
        try {
            return jwt.verify(token, JWT_SECRET_KEY);
        } catch (error) {
            logger.error('Failed to authenticate tokern' , error);
            throw new Error('Failed to authenticate token');
        }
    }
};
