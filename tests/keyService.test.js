const KeyModel = require('../models/keyModel.cjs');
const KeyService = require('../services/keyService.cjs');

describe('KeyService', () => {
    let keyService;

    beforeAll(() => {
        const keyModel = new KeyModel();
        keyService = new KeyService(keyModel);
    });

    test('should contain all characters from custom string in the generated custom key', () => {
        const customString = 'Eula';
        const key = keyService.generateCustomKey(customString);
        expect([...customString].every(char => key.includes(char))).toBe(true);
    });

    test('should invalidate an incorrectly formatted createHash string', () => {
        const invalidKey = 'Invalid==';
        const isValid = keyService.validate(invalidKey);
        expect(isValid).toBe(false);
    });

    test('should generate valid keys without duplicates', () => {
        const keys = keyService.generateManyKeys(10000);
        const uniqueKeys = new Set(keys);
        expect(uniqueKeys.size).toBe(keys.length);
    });

    test('should validate correctly formatted createHash string', () => {
        const validKey = keyService.generateKey();
        console.log("Generated Key: ", validKey);
        const isValid = keyService.validate(validKey);
        console.log("Validation Result: ", isValid);
        expect(isValid).toBe(true);
    });

    test('should convert createHash string to array of bytes and back', () => {
        const key = keyService.generateKey();
        const byteArray = keyService.parse(key);
        const keyString = keyService.stringify(byteArray);
        expect(keyString).toBe(key);
    });

    test('should generate custom key with length 30', () => {
        const customString = 'Beidou';
        const key = keyService.generateCustomKey(customString);
        expect(key.length).toBe(30);
    });

    test('should throw error for custom string longer than 15 characters', () => {
        expect(() => {
            keyService.generateCustomKey('ThisStringIsWayTooLong');
        }).toThrow('Custom string length cannot exceed 15 characters');
    });
});
