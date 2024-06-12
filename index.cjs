const KeyModel = require('./models/keyModel.cjs');
const KeyService = require('./services/keyService.cjs');
const KeyController = require('./controllers/keyController.cjs');

const keyModel = new KeyModel();
const keyService = new KeyService(keyModel);
const keyController = new KeyController(keyService);

module.exports = keyController;
