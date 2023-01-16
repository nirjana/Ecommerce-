import knexfile from '../knexfile.js';
const knex = require("knex")(knexfile);

export { knex };
