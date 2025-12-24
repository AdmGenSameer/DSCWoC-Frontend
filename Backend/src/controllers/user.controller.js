import User from '../models/User.model.js';
import { asyncHandler } from '../middleware/errorHandler.js';
import { successResponse } from '../utils/response.js';
import { HTTP_STATUS } from '../config/constants.js';

/**
 * @desc    Get all users
 * @route   GET /api/v1/users
 * @access  Public
 */
export const getUsers = asyncHandler(async (req, res) => {
  // TODO: Implement pagination
  // TODO: Implement filtering by role
  // TODO: Implement search functionality
  
  res.status(HTTP_STATUS.OK).json({
    status: 'success',
    message: 'Get all users - TODO: Implement this endpoint',
  });
});

/**
 * @desc    Get single user
 * @route   GET /api/v1/users/:id
 * @access  Public
 */
export const getUser = asyncHandler(async (req, res) => {
  // TODO: Fetch user by ID from database
  // TODO: Populate badges and pull requests
  
  res.status(HTTP_STATUS.OK).json({
    status: 'success',
    message: 'Get single user - TODO: Implement this endpoint',
  });
});

/**
 * @desc    Get user by username
 * @route   GET /api/v1/users/username/:username
 * @access  Public
 */
export const getUserByUsername = asyncHandler(async (req, res) => {
  // TODO: Fetch user by username from database
  
  res.status(HTTP_STATUS.OK).json({
    status: 'success',
    message: 'Get user by username - TODO: Implement this endpoint',
  });
});

/**
 * @desc    Update user profile
 * @route   PUT /api/v1/users/:id
 * @access  Private
 */
export const updateUser = asyncHandler(async (req, res) => {
  // TODO: Validate user can update (own profile or admin)
  // TODO: Update allowed fields only
  
  res.status(HTTP_STATUS.OK).json({
    status: 'success',
    message: 'Update user - TODO: Implement this endpoint',
  });
});

/**
 * @desc    Get user leaderboard
 * @route   GET /api/v1/users/leaderboard
 * @access  Public
 */
export const getLeaderboard = asyncHandler(async (req, res) => {
  // TODO: Fetch top users sorted by points
  
  res.status(HTTP_STATUS.OK).json({
    status: 'success',
    message: 'Get leaderboard - TODO: Implement this endpoint',
  });
});

/**
 * @desc    Get current user profile
 * @route   GET /api/v1/users/me
 * @access  Private
 */
export const getMe = asyncHandler(async (req, res) => {
  // TODO: Return current authenticated user's profile
  
  res.status(HTTP_STATUS.OK).json({
    status: 'success',
    message: 'Get current user profile - TODO: Implement this endpoint',
  });
});
