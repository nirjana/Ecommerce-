class ApiFeatures {
  constructor(query, querystr) {
    this.query = query;
    this.querystr = querystr;
  }
  search() {
    const keyword = this.querystr.keyword
      ? {
          name: {
            $regex: this.querystr.keyword, //mongodb ko operator regex
            $options: "i", //"i" means case insensitive
          },
        }
      : {}; //when we didnot give keyword it will pring {}

    console.log(keyword);

    this.query = this.query.find({ ...keyword }); //(three dot are used to make copy of the code) 1:35:35
    return this; // when we return this , it will return Class
  }

  filter() {
    const queryCopy = { ...this.querystr };

    console.log(queryCopy);
    //removing some field for category
    const removeFields = ["keyword"];

    removeFields.forEach((key) => delete queryCopy[key]);


    //filter for Price and Rating
    console.log(queryCopy);

    let queryStr = JSON.stringify(queryCopy);

    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`); //greater then, greater then equal to , less then , less then equal too

    this.query = this.query.find(JSON.parse(queryStr));
    console.log(`line number 40` + queryStr);

    console.log(queryStr);


    return this;
  }
}

module.exports = ApiFeatures;
