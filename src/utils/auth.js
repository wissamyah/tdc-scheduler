/**
 * Authentication utilities for password management
 * Uses Web Crypto API for secure hashing
 */

/**
 * Hash a password using SHA-256
 * @param {string} password - The password to hash
 * @returns {Promise<string>} The hashed password as hex string
 */
export async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

/**
 * Verify a password against a stored hash
 * @param {string} password - The password to verify
 * @param {string} storedHash - The stored hash to compare against
 * @returns {Promise<boolean>} True if password matches
 */
export async function verifyPassword(password, storedHash) {
  const hash = await hashPassword(password);
  return hash === storedHash;
}

/**
 * Store authentication token in session storage
 * @param {string} token - The authentication token
 */
export function setAuthToken(token) {
  sessionStorage.setItem('tdc_auth_token', token);
}

/**
 * Get authentication token from session storage
 * @returns {string|null} The stored token or null
 */
export function getAuthToken() {
  return sessionStorage.getItem('tdc_auth_token');
}

/**
 * Remove authentication token from session storage
 */
export function clearAuthToken() {
  sessionStorage.removeItem('tdc_auth_token');
}

/**
 * Check if user is authenticated
 * @returns {boolean} True if authenticated
 */
export function isAuthenticated() {
  return getAuthToken() !== null;
}
