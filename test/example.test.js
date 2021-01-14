// IMPORT MODULES under test here:
import { countAsAYes } from '../utils.js';

const test = QUnit.test;

test('Should return true when provided a word that starts with the letter Y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countAsAYes('yeaaaahhhhh');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Should return false when provided a word that starts with anything but the letter Y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countAsAYes('nah');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
