import Knex from 'knex';
import camelize from 'camelize';
import snakeize from 'snakeize';

import {configuration as connection} from '../knexfile.js';
console.log("this is connection", connection);

/**
 * Base model for that can be used for all tables.
 *
 * @class DBModel
 */
class DBModel {
  constructor(table) {
    this.table = table;
    this.connection = Knex(connection);
  }

  async getAll() {
    const data = await this.connection(this.table).select('*');

    return camelize(data);
  }

  async getById(id) {
    const [data] = await this.connection(this.table).select('*').where('id', id);

    return data ? camelize(data) : null;
  }

  async findByParams(params) {
    const [data] = await this.connection(this.table).select('*').where(snakeize(params));

    return data ? camelize(data) : null;
  }

  async save(data) {
    const result = await this.connection(this.table).insert(snakeize(data)).returning('*');

    return camelize(result);
  }

  async updateById(id, data) {
    const result = await this.connection(this.table).update(snakeize(data)).where({ id }).returning('*');

    return camelize(result);
  }

  async removeById(id) {
    console.log("llllllif",id);
    const result = await this.connection(this.table).delete().where({ id });
      console.log("llllll",result);
    return camelize(result);
  }

  async removeByParams(params) {
    const result = await this.connection(this.table).delete().where(snakeize(params));
    console.log("result1",result);
    return camelize(result);
  }

  async query(sql, params) {
    const result = await this.connection.raw(sql, params);

    return camelize(result.rows);
  }
}

export default DBModel;
