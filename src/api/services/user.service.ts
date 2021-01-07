import { UserDAO } from "../dao";
import { ErrorHandler } from "../common/";

const User = new UserDAO();


const createUser = (req, res, next) => {
  const query = req.body;
  User.create(query)
    .then((user) => {
      res.body = user;
      next();
    })
    .catch((err) => {
      next(new ErrorHandler("400", err));
    });
};

const getAllUsers = (req, res, next) => {
  User.getAll()
    .then((users) => {
      res.body = users;
      next();
    })
    .catch((err) => {
      next(new ErrorHandler("500", err._message));
    });
};

const getUserByUsername = (req, res, next) => {
  const username = req.params.username;
  User.getByID({ username })
    .then((user) => {
      if (!user) {
        next(
          new ErrorHandler("404", `User with username ${username} Not Found`)
        );
      }
      res.body = user;
      next();
    })
    .catch((err) => {
      next(new ErrorHandler("400", err._message));
    });
};

const updateUser = (req, res, next) => {
  const username = req.params.username;
  User.update({ username }, req.body)
    .then((result) => {
      res.body = {
        message: result.nModified ? "Success" : "Error",
      };
      next();
    })
    .catch((err) => {
      next(new ErrorHandler("400", err._message));
    });
};

const deleteUser = (req, res, next) => {
  const username = req.params.username;
  User.delete({ username })
    .then((result) => {
      res.body = {
        message: result.deletedCount ? "Success" : "Error",
      };
      next();
    })
    .catch((err) => {
      next(new ErrorHandler("400", err._message));
    });
};

export default {
  createUser: createUser,
  getAllUsers: getAllUsers,
  getUserByUsername: getUserByUsername,
  updateUser: updateUser,
  deleteUser: deleteUser,
};
