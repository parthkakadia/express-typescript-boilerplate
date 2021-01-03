import { Model } from "mongoose";

class BaseDAO {

  private model:Model<any>;

  constructor(model: Model<any>) {
    this.model = model;
  }

  async create(obj:any){
   return await this.model.create(obj);
  }

  async update(query:any,obj:any){
    return await this.model.updateOne(query,obj);
  }

  async delete(id:any){
    return await this.model.deleteOne(id);
  }
  
  async getAll(){
    return await this.model.find({});
  }

  async getByID(id:any){
    return await this.model.findOne(id);
  }

}

export default BaseDAO;
