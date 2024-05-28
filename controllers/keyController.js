class KeyController {
    constructor(keyService) {
        this.keyService = keyService;
    }

    generateKey() {
        return this.keyService.generateKey();
    }
}

module.exports = KeyController;
