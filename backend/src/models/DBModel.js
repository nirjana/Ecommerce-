class DBModel {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    const returnedData = await this.model.find();

    return returnedData;
  }

  async save(data) {
    const returnedData = await this.model.create(data);

    return returnedData;
  }

  async updateById(id, data) {
    const returnedData = await this.model.findOneAndUpdate({ _id: id }, data, {
      new: true,
      runValidator: true,
      useFindAndModify: false,
    });

    return returnedData;
  }

  async deleteById(id) {
    let doc = await Admin.findOne({ _id: id });
    const returnedData = await this.model.deleteOne({ _id: id });
    if (returnedData === 1) {
      return doc;
    } else {
      return "no doc found";
    }
  }

  async deleteProductById(id) {
    let doc = await this.model.findOne({ _id: id });
    const returnedData = await this.model.deleteOne({ _id: id });
    if (returnedData === 1) {
      return doc;
    } else {
      return "no doc found";
    }
  }

  async findByParams(data) {
    let returnedData = await this.model.findOne(data);

    return returnedData;
  }

  async findByData(email, password) {
    // let returnedData = await this.model.findOne(data);
    const returnedData = await this.model
      .findOne({ email: email })
      .select("+password");
    return returnedData;
  }

  async findproductById(id) {
    const returnedData = await this.model.findById({ _id: id });

    return returnedData;
  }

  async findAllProduct() {
    const returnedData = await this.model.find();

    return returnedData;
  }

  async findByUsername(username, password) {
    // let returnedData = await this.model.findOne(data);
    const returnedData = await this.model
      .findOne({ username: username })
      .select("+password");
    return returnedData;
  }
}




export default DBModel;
