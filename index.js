const KeyModel = require('./models/keyModel');
const KeyService = require('./services/keyService');
const KeyController = require('./controllers/keyController');

const keyModel = new KeyModel();
const keyService = new KeyService(keyModel);
const keyController = new KeyController(keyService);

module.exports = keyController;
