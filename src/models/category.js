import DBModel from './DBModel.js';

/**
 * Model for the 'manufacturers' table.
 *
 * @class Manufacturer
 */
class Category extends DBModel {
  constructor() {
    super('category');
  }
}

export default Category;