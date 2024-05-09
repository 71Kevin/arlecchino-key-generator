const { randomBytes } = require('crypto');

class ArlecchinoKeyGenerator {
    constructor() {
        this.key = this.generateUniqueKey();
        this.generateKey = this.generateKey.bind(this);
    }
    
    generateUniqueKey() {
        const randomBytesBuffer = randomBytes(16);
        return randomBytesBuffer.toString('hex');
    }
    
    addStringMiddle(str, insertStr) {
        const middleIndex = Math.floor(str.length / 2);
        return str.slice(0, middleIndex) + insertStr + str.slice(middleIndex);
    }
    
    shuffleString(str) {
        const array = str.split('');
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array.join('');
    }
    
    randomCharsToBase64(str) {
        const randomIndices = [];
        while (randomIndices.length < 7) {
            const index = Math.floor(Math.random() * str.length);
            if (!randomIndices.includes(index)) {
                randomIndices.push(index);
            }
        }
        const selectedChars = randomIndices.map(index => str[index]).join('');
        return Buffer.from(selectedChars).toString('base64');
    }
    
    generateKey() {
        const stringWithMiddleString = this.addStringMiddle(this.key, "Arlecchino");
        const shuffledString = this.shuffleString(stringWithMiddleString);
        return this.randomCharsToBase64(shuffledString);
    }
}

module.exports = new ArlecchinoKeyGenerator().generateKey;
