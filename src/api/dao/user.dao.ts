import BaseDAO from './base.dao';
import {User,IUser} from '../models/';

class UserDAO extends BaseDAO {

    constructor(){
        super(User);
    }
}

export default UserDAO;