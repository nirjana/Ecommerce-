import DBModel from './DBModel.js';

/**
 * Model for the 'manufacturers' table.
 *
 * @class Manufacturer
 */
class Books extends DBModel {
  constructor() {
    super('books');
  }
}

export default Books;