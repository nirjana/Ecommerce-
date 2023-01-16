import Books from "../models/books.js";
import Category from "../models/category.js";

/**
 * Create a new user.
 *
 * @param {Object} params
 * @return {Object}
 */
export async function createBook(params) {
    // const { name, email, password, favorites } = params;
  
    // const existingUser = await new Books().findByParams({ email });
  
    // if (existingUser) {
    //   logger.error('The email address is already taken');
  
    //   throw new Boom.badRequest('The email address is already taken');
    // }
  
    // const hashedPassword = hash(password);
    // await new Category().save({id:1,category:"science"})
  
    const [insertedData] = await new Books().save({id:3,name:"atomic habit",description:"Atomic",genre:"self-help",author:"James Clear",ratings:3,stock:34,hit:56,category_id:1});
    console.log("inserted data",insertedData)
    return {
      data: insertedData,
      message: 'Added Customer successfully',
    };
  }