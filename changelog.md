# Changelog

## [1.0.3] - 2024-06-06

### Added
- `createHash()`: Generates a unique key with "Arlecchino" characters.
- `createManyHashes(count)`: Generates the specified number of unique keys.
- `createCustomHash(customString)`: Generates a custom key with the specified string.
- Enhanced unit tests to cover new functionalities.

## [1.0.1] - 2024-05-28

### Added
- Implemented MVC architecture for better code organization.
  - Created `models/keyModel.js` for key generation logic.
  - Created `services/keyService.js` for key manipulation and generation functions.
  - Created `controllers/keyController.js` to interface with the service layer.
- Added Jest for unit testing.
  - Configured Jest in `jest.config.js`.
  - Created tests in `tests/keyService.test.js` to ensure:
    - Generated IDs contain a character from "Arlecchino".
    - No duplicate IDs are generated in 10,000 iterations.
    - Generated IDs follow a valid Base64 pattern.
- Updated `package.json`:
  - Added `jest` as a development dependency.
  - Added `test` script to run Jest tests.

### Changed
- Updated `index.js` to use the new MVC architecture.
- Enhanced the key generation process to avoid ending with "==" by replacing with random characters.

### Fixed
- Ensured unique key generation by checking existing keys and avoiding duplicates.
