class KeyController {
    constructor(keyService) {
        this.keyService = keyService;
    }

    createHash() {
        return this.keyService.generateKey();
    }

    createManyHashes(count) {
        return this.keyService.generateMultipleKeys(count);
    }

    createCustomHash(customString) {
        return this.keyService.generateCustomKey(customString);
    }
}

module.exports = KeyController;
