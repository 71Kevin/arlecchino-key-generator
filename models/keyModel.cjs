const { randomBytes } = require('crypto');

class KeyModel {
    constructor() {
        this.key = randomBytes(16).toString('hex');
    }

    generateRandomString(length = 16) {
        return randomBytes(length).toString('hex');
    }

    addStringMiddle(original, addition) {
        const middleIndex = Math.floor(original.length / 2);
        return original.slice(0, middleIndex) + addition + original.slice(middleIndex);
    }

    shuffleString(string) {
        return string.split('').sort(() => Math.random() - 0.5).join('');
    }

    randomCharsToBase64(shuffledString) {
        const base64String = Buffer.from(shuffledString).toString('base64');
        return base64String.substring(0, 24);
    }
}

module.exports = KeyModel;
