import { UserDAO } from "../dao";

const User = new UserDAO();

function getAllUsers(req,res,next){
    User.getAll().then((users)=>{
        res.body = {
            users:users
        }
        next();
    })
}

export default {
    getAllUsers : getAllUsers
}