class KeyService {
    constructor(keyModel) {
        this.keyModel = keyModel;
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
        let base64Str = Buffer.from(selectedChars).toString('base64');
        
        while (base64Str.endsWith('==')) {
            base64Str = base64Str.slice(0, -2) + this.generateRandomChar() + this.generateRandomChar();
        }

        return base64Str;
    }

    generateRandomChar() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        return chars.charAt(Math.floor(Math.random() * chars.length));
    }

    generateKey() {
        const uniqueKey = this.keyModel.generateUniqueKey();
        const stringWithMiddleString = this.addStringMiddle(uniqueKey, "Arlecchino");
        const shuffledString = this.shuffleString(stringWithMiddleString);
        return this.randomCharsToBase64(shuffledString);
    }
}

module.exports = KeyService;
