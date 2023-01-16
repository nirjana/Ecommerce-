import DBModel from './DBModel.js';

/**
 * Model for the 'manufacturers' table.
 *
 * @class Manufacturer
 */
class Issue extends DBModel {
  constructor() {
    super('issue');
  }
}

export default Issue;