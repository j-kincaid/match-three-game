/**
 * @jest-environment jsdom
 */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b088523 (reconcile after deleing fonts branch)
 const app = require('../scripts/app');

 test('use jsdom in this test file', () => {
   const element = document.createElement('div')
   expect(element).not.toBeNull()
 })
 
 describe('Validate Move', () => {
 
   test('should be valid position', () => {
     expect(app.isValidPosition(1)).toBe(true);
   })
 
   test('should be low invalid position', () => {
     expect(app.isValidPosition(-1)).toBe(false);
   })
 
   test('should be high invalid position', () => {
     expect(app.isValidPosition(64)).toBe(false);
   })
 
<<<<<<< HEAD
 })
=======
=======
>>>>>>> 56cd688 (restore .json files to remedy rebase)
=======
>>>>>>> d8547cd (restore .json files to remedy rebase)
=======
=======
>>>>>>> 3771025 (update vsc permissions)
>>>>>>> 38adce2 (update vsc permissions)
const app = require('../scripts/app');

test('use jsdom in this test file', () => {
  const element = document.createElement('div')
  expect(element).not.toBeNull()
})

describe('Validate Move', () => {

  test('should be valid position', () => {
    expect(app.isValidPosition(1)).toBe(true);
  })

  test('should be low invalid position', () => {
    expect(app.isValidPosition(-1)).toBe(false);
  })

  test('should be high invalid position', () => {
    expect(app.isValidPosition(64)).toBe(false);
  })

=======

test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
});

const app = require("../scripts/app")
test('should be valid', () => {
    const element = document.createElement('div');
    expect(element).not.toBe(1)
<<<<<<< HEAD
>>>>>>> 0d01b79 (add: jest test sample)
=======
const app = require('../scripts/app');

test('use jsdom in this test file', () => {
  const element = document.createElement('div')
  expect(element).not.toBeNull()
})

describe('Validate Move', () => {

  test('should be valid position', () => {
    expect(app.isValidPosition(1)).toBe(true);
  })

  test('should be low invalid position', () => {
    expect(app.isValidPosition(-1)).toBe(false);
  })

  test('should be high invalid position', () => {
    expect(app.isValidPosition(64)).toBe(false);
  })

>>>>>>> 83de04d (fix: logic modification to prevent moves)
=======
>>>>>>> 12df19a (restore package-lock and package.json)
>>>>>>> 3771025 (update vsc permissions)
})
>>>>>>> dafed93 (restore .json files)
=======
 })
>>>>>>> b088523 (reconcile after deleing fonts branch)
