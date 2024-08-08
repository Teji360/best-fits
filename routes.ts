/**
 * An array of routes that are accessible to the public
 * these routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
    "/"
]

/**
 * An array of routes that are used for authentication
 * these routes will redirect users to /auth
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
]

/**
 * The prefix for API authentication routes
 * These routes will redirect logged in users to /api/auth
 * @type {string[]}
 */
export const apiAuthPrefix = "/api/auth"


/**
 * The prefix for API authentication routes
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings"