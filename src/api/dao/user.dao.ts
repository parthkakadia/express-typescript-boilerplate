import BaseDAO from './base.dao';
import {User} from '../models/';

class UserDAO extends BaseDAO {

    constructor(){
        super(User);
    }
}

export default UserDAO;