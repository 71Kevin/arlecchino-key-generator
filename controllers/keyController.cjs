class KeyController {
    constructor(keyService) {
        this.keyService = keyService;
    }

    /**
     * Generates a unique key with a character from "Arlecchino".
     * @returns {string} A unique key.
     */
    createHash() {
        return this.keyService.generateKey();
    }

    /**
     * Generates multiple unique keys.
     * @param {number} count - Number of keys to generate.
     * @returns {string[]} Array of unique keys.
     */
    createManyHashes(count) {
        return this.keyService.generateManyKeys(count);
    }

    /**
     * Generates a custom key with the specified string.
     * @param {string} customString - The custom string to include.
     * @returns {string} A unique custom key.
     */
    createCustomHash(customString) {
        return this.keyService.generateCustomKey(customString);
    }

    /**
     * Parses a createHash string to an array of bytes.
     * @param {string} hashString - The createHash string to parse.
     * @returns {Uint8Array} The byte array.
     */
    parse(hashString) {
        return this.keyService.parse(hashString);
    }

    /**
     * Converts an array of bytes to a createHash string.
     * @param {Uint8Array} byteArray - The byte array to convert.
     * @returns {string} The createHash string.
     */
    stringify(byteArray) {
        return this.keyService.stringify(byteArray);
    }

    /**
     * Validates a string to see if it is a valid createHash.
     * @param {string} hashString - The createHash string to validate.
     * @returns {boolean} True if valid, false otherwise.
     */
    validate(hashString) {
        return this.keyService.validate(hashString);
    }
}

module.exports = KeyController;
