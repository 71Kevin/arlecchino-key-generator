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

    test('should generate 100k unique IDs', () => {
        const keys = new Set();
        for (let i = 0; i < 100000; i++) {
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
});
