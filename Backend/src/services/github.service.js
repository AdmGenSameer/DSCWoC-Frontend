import axios from 'axios';
import logger from '../utils/logger.js';

/**
 * GitHub Service
 * Handles all interactions with GitHub API
 * 
 * TODO: Implement the following methods:
 * - getRepository(owner, repo)
 * - getPullRequests(owner, repo, options)
 * - getPullRequest(owner, repo, prNumber)
 * - getUser(username)
 * - syncProjectPRs(project)
 * - parseRepoUrl(url)
 */

class GitHubService {
  constructor() {
    this.baseURL = 'https://api.github.com';
    this.token = process.env.GITHUB_TOKEN;

    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        Authorization: `token ${this.token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });
  }

  // TODO: Implement GitHub API methods here
}

export default new GitHubService();
