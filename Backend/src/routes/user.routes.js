import express from 'express';
import { authenticate, authorize } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import * as userController from '../controllers/user.controller.js';
// Import validation schemas when created
// import { userValidation } from '../validations/user.validation.js';

const router = express.Router();

// Public routes
router.get('/', userController.getUsers);
router.get('/leaderboard', userController.getLeaderboard);
router.get('/:id', userController.getUser);
router.get('/username/:username', userController.getUserByUsername);

// Protected routes
router.get('/me', authenticate, userController.getMe);
router.put('/:id', authenticate, userController.updateUser);

// Admin routes
// router.delete('/:id', authenticate, authorize('admin'), userController.deleteUser);

export default router;
