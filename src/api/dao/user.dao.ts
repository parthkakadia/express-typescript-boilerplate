import BaseDAO from './base.dao';
import {User} from '../models';

class UserDAO extends BaseDAO {

    constructor(){
        super(User);
    }

     ifUsernameExists = async (username)=>{
        return await this.getByID(username) ? true:false;
    }

}

export default UserDAO;