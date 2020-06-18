/**
 * @author Usman Suleiman
 */
const dbHandler = require('./db-handler');
// const userService = require('../src/services/UserService'); // Import the db service here

// Connect to a test databse before running any tests.
beforeAll(async () => await dbHandler.connect());

// clear all test data after every test.
afterEach(async () => await dbHandler.clearDatabase());

// Remove and close the db and server.
afterAll(async () => await dbHandler.closeDatabase());

// All your test suite goes after this line