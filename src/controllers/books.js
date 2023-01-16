import * as bookService from '../services/books.js';

/**
 * Controller to add a new book.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function addBook(req, res, next) {
  bookService
    .createBook(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}