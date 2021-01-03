
import { UserDAO } from "../dao";

const User = new UserDAO();

const createUser = (req, res, next) => {
  const query = req.body;
  User.create(query).then((result) => {
    res.body = {
      message: result
    };
    next();
  });
};

const getAllUsers = (req, res, next) => {
  User.getAll().then((users) => {
    res.body = users;
    next();
  });
};

const getUserByUsername = (req, res, next) => {
  const query = {
    username: req.params.username,
  };
  User.getByID(query).then((user) => {
    res.body = {
      user: user,
    };
    next();
  });
};

const updateUser = (req, res, next) => {
  const query = {
    username:req.params.username
  };
  User.update(query).then((result) => {
    res.body = {
      message: result.nModified ? "Success" : "Error",
    };
    next();
  });
};

const deleteUser = (req, res, next) => {
  const query = {
    username: req.params.username,
  };
  User.delete(query).then((result) => {
    res.body = {
      message: result.deletedCount ? "Success" : "Error",
    };
    next();
  });
};

export default {
  createUser:createUser,
  getAllUsers: getAllUsers,
  getUserByUsername: getUserByUsername,
  updateUser: updateUser,
  deleteUser: deleteUser,
};
