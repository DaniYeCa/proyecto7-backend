const { isAuth } = require("../../middlewares/auth");
const { register, login, updateUser, deleteUser } = require("../controllers/user");
const userRouter = require("express").Router();

userRouter.post("/login", login);
userRouter.post("/", register);
userRouter.put("/:id", isAuth, updateUser);
userRouter.delete("/:id", isAuth, deleteUser);

module.exports = userRouter;