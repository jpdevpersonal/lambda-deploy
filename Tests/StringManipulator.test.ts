import { StringManipulator } from '../src/StringManipulator';

describe ('StringManipulator', () => {
    let manipulator: StringManipulator;

    beforeEach(()=> {
        manipulator = new StringManipulator();
    });

    test('Should reverse a string',() => {
        // Arrange
        const input = "January";

        // Act
        const result = manipulator.reverseInput(input);

        // Assert
        expect(result).toBe("yraunaJ");
    });

    test('Should throw error on empty string',() => {
        // Arrange
        const input = "";

        // Act
        expect(()=> {
            manipulator.reverseInput(input)
        }).toThrow("body is empty");
    });
});