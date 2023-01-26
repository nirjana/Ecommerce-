class DBModel {
    constructor(model) {
        this.model = model
    }

    async getAll() {
        const returnedData = await this.model.find();

        return returnedData;
    }

    async save(data) {
        const returnedData = await this.model.create(data);
        
        return returnedData;
    }

    async updateById(id,data) {
        const returnedData = await this.model.findOneAndUpdate(
            {_id:id},
            data,
            { new:true }
        ) 

        return returnedData;
    }

    async deleteById(id) {
            let doc = await this.model.findOne(
        { _id:id }
    );
        const returnedData = await this.model.deleteOne(
            {_id:id}
        )
        if(returnedData === 1) {
            return doc;
        }
        else {
            return "no doc found";
        }
    }

    async findByParams(data) {
        let returnedData = await this.model.findOne(data);
        console.log("returneddata",returnedData)
        return returnedData;
    }
    async findById(id) {
        let returnedData = await this.model.findOne({_id:id});
        
        return returnedData;
    }
}

export default DBModel;