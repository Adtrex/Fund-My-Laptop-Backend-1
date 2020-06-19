/**
 * @author Usman Suleiman
 * ticket title: User Model
 * title Id: #45803
 */
const mongoose = require('mongoose');
const dbHandler = require('./db-handler');
const userService = require('../src/services/UserService');

// Connect to a test databse before running any tests.
beforeAll(async () => await dbHandler.connect());

// clear all test data after every test.
afterEach(async () => await dbHandler.clearDatabase());

// Remove and close the db and server.
afterAll(async () => await dbHandler.closeDatabase());

describe('user', () => {
  it('can be created correctly', () => {
    expect(async () => await userService.create(mockUser))
      .not.toThrow();
  });
  // it('can be updated correctly', () => {
  //   const mockUpdate = {
  //     name: 'Senbon Zakura',
  //     email: 'shinigami@yahoo.com',
  //   };
  //   expect(async () => await userService.create(mockUser))
  //     .not.toThrow();
  // });
});

const mockUser = {
  name: 'Usman Suleiman',
  email: 'usmansbk@gmail.com',
  password: 'ittadakimasu'
};