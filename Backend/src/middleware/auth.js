import { createClient } from '@supabase/supabase-js';
import { HTTP_STATUS, ERROR_MESSAGES } from '../config/constants.js';
import logger from '../utils/logger.js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

/**
 * Middleware to authenticate requests using Supabase JWT
 * TODO: Implement JWT verification
 * TODO: Fetch user from database
 * TODO: Attach user to request object
 */
export const authenticate = async (req, res, next) => {
  // TODO: Implement authentication logic

  next();
};

/**
 * Middleware to authorize based on user roles
 * TODO: Check if user has required role
 */
export const authorize = (...roles) => (req, res, next) => {
    // TODO: Implement authorization logic

    next();
  };

/**
 * Optional authentication - doesn't fail if no token
 */
export const optionalAuth = async (req, res, next) => {
  // TODO: Implement optional authentication

  next();
};

