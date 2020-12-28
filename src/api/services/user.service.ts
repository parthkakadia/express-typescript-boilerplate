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

function getUserByUsername(req,res,next){
    const query = {
        username:req.params.username
    }
    User.getByID(query).then((user)=>{
        res.body = {
            user:user
        }
        next();
    })
}

export default {
    getAllUsers : getAllUsers,
    getUserByUsername : getUserByUsername
}