const { randomBytes } = require('crypto');

class KeyModel {
    constructor() {
        this.generatedKeys = new Set();
    }

    generateUniqueKey() {
        let key;
        do {
            const randomBytesBuffer = randomBytes(16);
            key = randomBytesBuffer.toString('hex');
        } while (this.generatedKeys.has(key));
        this.generatedKeys.add(key);
        return key;
    }
}

module.exports = KeyModel;
