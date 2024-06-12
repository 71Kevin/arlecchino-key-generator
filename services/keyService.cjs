const { randomBytes } = require('crypto');

class KeyService {
    constructor(keyModel) {
        this.keyModel = keyModel;
    }

    generateKey() {
        const randomString = this.keyModel.generateRandomString();
        const stringWithMiddleString = this.keyModel.addStringMiddle(randomString, "Arlecchino");
        const shuffledString = this.keyModel.shuffleString(stringWithMiddleString);
        return this.keyModel.randomCharsToBase64(shuffledString);
    }

    generateManyKeys(count) {
        if (count > 100000000) {
            throw new Error('Maximum limit of 100000000 keys exceeded');
        }

        const keys = new Set();
        while (keys.size < count) {
            keys.add(this.generateKey());
        }
        return Array.from(keys);
    }

    generateCustomKey(customString) {
        if (customString.length > 15) {
            throw new Error('Custom string length cannot exceed 15 characters');
        }

        let finalKey;
        do {
            const randomBytesBuffer = randomBytes(24);
            const randomString = randomBytesBuffer.toString('hex');
            const shuffledString = this.keyModel.shuffleString(randomString);
            const selectedChars = [...customString, ...shuffledString.slice(0, 30 - customString.length)];
            finalKey = this.keyModel.shuffleString(selectedChars.join('')).substring(0, 30);
        } while (![...customString].every(char => finalKey.includes(char)));

        return finalKey;
    }

    parse(hash) {
        return Buffer.from(hash, 'base64');
    }

    stringify(byteArray) {
        return Buffer.from(byteArray).toString('base64');
    }

    validate(hash) {
        if (typeof hash !== 'string' || hash.length !== 24) {
            return false;
        }
        const base64Regex = /^[A-Za-z0-9+/]+={0,2}$/;
        return base64Regex.test(hash);
    }
}

module.exports = KeyService;
