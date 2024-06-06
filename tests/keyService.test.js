const KeyModel = require('../models/keyModel');
const KeyService = require('../services/keyService');

describe('KeyService', () => {
    let keyModel;
    let keyService;

    beforeEach(() => {
        keyModel = new KeyModel();
        keyService = new KeyService(keyModel);
    });

    test('should contain a character from "Arlecchino" in the generated ID', () => {
        const key = keyService.generateKey();
        const arlecchinoChars = new Set('Arlecchino'.split(''));
        const hasArlecchinoChar = key.split('').some(char => arlecchinoChars.has(char));
        expect(hasArlecchinoChar).toBe(true);
    });

    test('should generate 10k unique IDs', () => {
        const keys = new Set();
        for (let i = 0; i < 10000; i++) {
            const key = keyService.generateKey();
            expect(keys.has(key)).toBe(false);
            keys.add(key);
        }
    });

    test('should generate IDs in a valid pattern', () => {
        const key = keyService.generateKey();
        const base64Pattern = /^[A-Za-z0-9+/]{2,}(==)?$/;
        expect(base64Pattern.test(key)).toBe(true);
    });

    test('should generate specified number of unique keys', () => {
        const count = 100;
        const keys = keyService.generateMultipleKeys(count);
        expect(keys.length).toBe(count);
        const uniqueKeys = new Set(keys);
        expect(uniqueKeys.size).toBe(count);
    });

    test('should throw error when generating more than 100,000,000 keys', () => {
        expect(() => keyService.generateMultipleKeys(100000001)).toThrow('Maximum limit of 100,000,000 keys exceeded');
    });

    test('should generate custom key with specified string', () => {
        const customString = 'Clorinde';
        const key = keyService.generateCustomKey(customString);
        const customChars = new Set(customString.split(''));
        const hasCustomChar = key.split('').some(char => customChars.has(char));
        expect(hasCustomChar).toBe(true);
    });

    test('should throw error when custom string is longer than 15 characters', () => {
        expect(() => keyService.generateCustomKey('a'.repeat(16))).toThrow('Custom string cannot be longer than 15 characters');
    });

    test('should generate custom key of length 30', () => {
        const customString = 'Clorinde';
        const key = keyService.generateCustomKey(customString);
        expect(key.length).toBe(40);
    });
});
